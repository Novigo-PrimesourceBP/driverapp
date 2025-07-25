/**
 * Arrival Event for each stop - Upload driver Signature
 * @param {IClientAPI} clientAPI
 */
export default async function ReportArrivalSign(clientAPI) {
  let { tor_id, name, locid, stop_id } = clientAPI.binding;//Get bindings from page
  let context = clientAPI.getPageProxy()
  
  //Get Signature Value
  let signature = context.evaluateTargetPath("#Control:SignatureArrv/#Value")
  
  //Validation
  if (!signature) {
    alert("Signature required!!!")
    context.dismissActivityIndicator()
    return
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
    folder: locid,
    delv_number:'',
    keyrec: '',    
    recipient:''
  };
  // Step 3: Report event
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
      context.dismissActivityIndicator()
      alert(`Event reported and signature uploaded for ${locid}. Please refresh the app.`)            
    }).catch((err) => {
      context.dismissActivityIndicator()
      alert(`Failed to upload ${err}`)            
    });
  }).catch((err) => {
    context.dismissActivityIndicator()
    alert(`Failed to report event ${err}`)    
  }).finally(() => {
    context.dismissActivityIndicator();
    return context.executeAction("/driverapp/Actions/ClosePage.action")
  })
}
