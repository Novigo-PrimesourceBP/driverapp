import CheckforKeyRec from "../action/CheckforKeyRec";

/**
 * Reports the POD event/Attach the Customer signature ( OFfline Ready )
 * @param {IClientAPI} clientAPI
 */
export default async function SavePODSignMedia(clientAPI) {
  //Declaration
  let context = clientAPI.getPageProxy()
  let { tor_id, locid } = clientAPI.binding;

  let event_reason, signature, recipient, keyrec, delivery, remarks;

  try {
    //Get UI values
    event_reason = context.evaluateTargetPath("#Control:EventReason/#SelectedValue");
    signature = context.evaluateTargetPath("#Control:SignatureSrc/#Value");
    recipient = context.evaluateTargetPath("#Control:Cust_name/#Value");
    keyrec = context.evaluateTargetPath("#Control:KeyRec/#Value");
    delivery = context.evaluateTargetPath("#Control:Delivery/#SelectedValue");
    remarks = context.evaluateTargetPath("#Control:Remarks/#Value");
  } catch (error) {
    const errMsg = error?.message || String(error);
    // This happens when Dropdown is not selected
    if (errMsg.includes("No value in the selected element")) {
      alert("Please make sure all required fields are filled in.");
    } else {
      alert("Unexpected error: " + errMsg);
    }
    return;
  }

  //Step 1 : Validation
  if (!event_reason || event_reason === "") {
    alert("Select an Event Reason!!!")
    return
  }
  if (!signature) {
    alert("Signature required!!!")
    return
  }

  if (!recipient) {
    alert("Enter the recipient name")
    return
  }
  // Check whether KeyRec can be mandatory based on FU Payer
  try {
    let isKeyRecMandatory = await CheckforKeyRec(clientAPI); // returns true or false
    if (!keyrec && isKeyRecMandatory) {
      alert("KeyRec is Required");
      return;
    }
  } catch (error) {
    alert("Error checking KeyRec: " + error.message);
    return;
  }

  // Show initial indicator only before async calls
  await context.executeAction({
    Name: "/driverapp/Actions/attachmentdwld/Attachment/ShowBannerMessage.action",
    Properties: { Message: "Reporting Event...", Duration: 1 }
  });
  //  context.showActivityIndicator("Reporting Event...");

  // Step 2: Set action binding for ReportEvent & Signature upload
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'POD',
    event_reason: event_reason,
    ext_loc_id: locid,
    event_time: '' + new Date().getTime(),
    DelvNumber: delivery,
    Keyrec: keyrec,
    recipient: recipient,
    DelvRemarks: remarks
  });
  const slug = {
    tor_id: tor_id,
    description: delivery + "_Recipient_Sign",
    attachment_type: 'ZSIG',
    alternative_name: 'POD-Signature',
    folder: locid,
    delv_number: delivery,
    keyrec: keyrec,
    recipient: recipient
  };

  // Step 3: Report event
  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action")
    .then(async () => {
      context.dismissActivityIndicator()
      // context.showActivityIndicator("Uploading signature");
      await context.executeAction({
        Name: "/driverapp/Actions/attachmentdwld/Attachment/ShowBannerMessage.action",
        Properties: { Message: "Uploading signature", Duration: 1 }
      });
      // Step 4: Upload Signature
      return context.executeAction({
        Name: "/driverapp/Actions/attachmentdwld/Attachment/CreateSign.action",
        Properties: {
          Headers: { Slug: encodeURI(JSON.stringify(slug)) },
          Media: [signature]
        }
      }).then(() => {
        context.dismissActivityIndicator();
        return context.executeAction({
          Name: "/driverapp/Actions/action/Service/ShowMessage.action",
          Properties: {
            Title: "Success",
            Message: `Event reported and signature uploaded for ${delivery}. Please refresh the app.`
          }
        });
      }).catch((err) => {
        context.dismissActivityIndicator();
        return context.executeAction({
          Name: "/driverapp/Actions/action/Service/ShowMessage.action",
          Properties: {
            Title: "Error",
            Message: `Failed to upload: ${err.message || err}`
          }
        });
      });
    })
    .catch((err) => {
      context.dismissActivityIndicator();
      return context.executeAction({
        Name: "/driverapp/Actions/action/Service/ShowMessage.action",
        Properties: {
          Title: "Error",
          Message: `Failed to report event: ${err.message || err}`
        }
      });
    })
    .finally(() => {
      context.dismissActivityIndicator();
    });
}