import CheckforKeyRec from "./CheckforKeyRec";

/**
 * Reports the POD event/Attach the Customer signature
 * @param {IClientAPI} clientAPI
 */
export default async function ReportPOD(clientAPI) {
  //Declaration
  let context = clientAPI.getPageProxy()
  let { tor_id, name, locid, stop_id } = clientAPI.binding;

  let event_reason, signature, recipient, keyrec, delivery, remarks;

  try {    
    //Get UI values
    event_reason  = context.evaluateTargetPath("#Control:EventReason/#SelectedValue");
    signature     = context.evaluateTargetPath("#Control:SignatureSrc/#Value");
    recipient     = context.evaluateTargetPath("#Control:Cust_name/#Value");
    keyrec        = context.evaluateTargetPath("#Control:KeyRec/#Value");
    delivery      = context.evaluateTargetPath("#Control:Delivery/#SelectedValue");
    remarks       = context.evaluateTargetPath("#Control:Remarks/#Value");
  } catch (error) {
    context.dismissActivityIndicator()
    const errMsg = error?.message || String(error);

    if (errMsg.includes("No value in the selected element")) {
      alert("Please make sure all required fields are filled in.");
    } else {
      alert("Unexpected error: " + errMsg);
    }
    return;
  }
  
  //Validation
  if (!event_reason || event_reason === "") {
    alert("Select an Event Reason!!!")
    context.dismissActivityIndicator()
    return
  }
  if (!signature) {
    alert("Signature required!!!")
    context.dismissActivityIndicator()
    return
  }

  if (!recipient) {
    alert("Enter the recipient name")
    context.dismissActivityIndicator()
    return
  }
  // Check whether KeyRec can be mandatory based on FU Payer
  try {
      let isKeyRecMandatory = await CheckforKeyRec(clientAPI); // returns true or false
        if (!keyrec && isKeyRecMandatory ) {
          context.dismissActivityIndicator()
          alert("KeyRec is Required");          
          return;
        }
      }catch (error) {
        context.dismissActivityIndicator();
        alert("Error checking KeyRec: " + error.message);   
        return; 
  }

  // Show initial indicator only before async calls
   context.showActivityIndicator("Reporting Event...");

  //Step 1: Fetch CSRF Token
  let token;
  let targetUrl = `/action/AttachmentSet`;

  try {
    let response = await context.sendRequest(`/action`, {
      "method": "GET",
      'header': {
        "x-csrf-token": "fetch",
      }
    });
    token = response.headers["x-csrf-token"] || response.headers.get("x-csrf-token");
    if (!token) throw new Error("CSRF token missing");
  } catch (err) {
    context.dismissActivityIndicator();
    alert(`CSRF fetch failed: ${err.message || err}`);
    return;
  }

  // Step 2: Set action binding for ReportEvent
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
    .then(() => {
      context.dismissActivityIndicator()
      context.showActivityIndicator("Uploading signature");
 // Step 4: Upload attachment
      return context.sendRequest(targetUrl, {
        "method": "POST",
        'header': {
          "Content-Type": signature.contentType,
          "x-csrf-token": token,
          "Slug": encodeURI(JSON.stringify(slug))
        },
        "body": signature.content
      }).then(() => {
        context.dismissActivityIndicator();
        alert(`Event reported and signature uploaded for ${delivery}. Please refresh the app.`);
      }).catch((err) => {
        context.dismissActivityIndicator();
        alert(`Failed to upload: ${err.message || err}`);
      });
    })
    .catch((err) => {
      context.dismissActivityIndicator();
      alert(`Failed to report event: ${err.message || err}`);
    })
    .finally(() => {
      context.dismissActivityIndicator();
      return context.executeAction("/driverapp/Actions/ClosePage.action");
    });
}