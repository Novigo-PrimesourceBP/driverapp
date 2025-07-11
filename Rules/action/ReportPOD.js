/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function ReportPOD(clientAPI) {
  let { tor_id, name, locid, stop_id } = clientAPI.binding;
  let context = clientAPI.getPageProxy()
  context.showActivityIndicator("Processing .......")
  let event_reason = context.evaluateTargetPath(
    "#Control:EventReason/#SelectedValue"
  );
  //Get UI values
  let signature = context.evaluateTargetPath("#Control:SignatureSrc/#Value")
  let recipient = context.evaluateTargetPath("#Control:Cust_name/#Value")
  let keyrec    = context.evaluateTargetPath("#Control:KeyRec/#Value")
  let delivery  = context.evaluateTargetPath("#Control:Delivery/#SelectedValue")
  let remarks   = context.evaluateTargetPath("#Control:Remarks/#Value")

  //Validation
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

  if (!keyrec) {
    alert("KeyRec required!!!")
    context.dismissActivityIndicator()
    return
  }
  // alert(`${tor_id}-${name}-${locid}-${stop_id}-${event_reason}`)

  let token;
  let targetUrl = `/action/AttachmentSet`;
  try {
    let response = await context.sendRequest(`/action`, {
      "method": "GET",
      'header': {
        "x-csrf-token": "fetch",
      }
    });
    token = response.headers["x-csrf-token"]
  } catch (error) {
    alert(error)
    context.dismissActivityIndicator()
  }
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'POD',
    event_reason: event_reason,
    ext_loc_id: locid,
    event_time: '' + new Date().getTime(),
    Keyrec: keyrec,    
    recipient: recipient,
    DelvRemarks: remarks
  });
  const slug = {
    tor_id: tor_id,
    description: locid + "_Recipient_Sign",
    attachment_type: 'ZSIG',
    alternative_name: 'POD-Signature',
    folder: locid,
    delv_number: delivery,
    keyrec: keyrec,    
    recipient: recipient
  };
  context.dismissActivityIndicator()
  context.showActivityIndicator("Reporting Event......");
  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
    context.dismissActivityIndicator()
    context.showActivityIndicator("Uploading signature");
    return context.sendRequest(targetUrl, {
      "method": "POST",
      'header': {
        "Content-Type": signature.contentType,
        "x-csrf-token": token,
        "Slug": encodeURI(JSON.stringify(slug))
      },
      "body": signature.content
    }).then(() => {
      alert("Successfully uploaded")
      context.dismissActivityIndicator()
      return context.executeAction("/driverapp/Actions/ClosePage.action")
    }).catch((err) => {
      alert(`Failed to upload ${err}`)
      context.dismissActivityIndicator()
      return context.executeAction("/driverapp/Actions/ClosePage.action")
    });
  }).catch((err) => {
    alert(`Failed to report event ${err}`)
    context.dismissActivityIndicator()
  }).finally(() => {
    context.dismissActivityIndicator();
    return context.executeAction("/driverapp/Actions/ClosePage.action")
  })
}
