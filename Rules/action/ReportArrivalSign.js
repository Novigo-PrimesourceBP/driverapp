/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function ReportArrivalSign(clientAPI) {
  let { tor_id, name, locid, stop_id } = clientAPI.binding;//Get bindings from page
  let context = clientAPI.getPageProxy()
  context.showActivityIndicator("Processing .......")
  //Get Signature Value
  let signature = context.evaluateTargetPath("#Control:SignatureArrv/#Value")
  
  //Validation
  if (!signature) {
    alert("Signature required!!!")
    context.dismissActivityIndicator()
    return
  }

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
    event_code: 'ARRIV_DEST',
    event_reason: '',
    ext_loc_id: locid,
    event_time: '' + new Date().getTime(),    

  });
  const slug = {
    tor_id: tor_id,
    description: locid + "_Driver_Sign",
    attachment_type: 'ZSIG',
    alternative_name: 'Arrival-Signature',
    folder: locid
  };
  context.dismissActivityIndicator() //End of Processing
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
