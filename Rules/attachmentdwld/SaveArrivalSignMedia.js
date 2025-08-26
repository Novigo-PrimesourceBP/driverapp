/**
 * Arrival Event for each stop - Upload driver Signature (offline-ready)
 * @param {IClientAPI} clientAPI
 */
export default async function SaveArrivalSignMedia(clientAPI) {
  let { tor_id, locid, } = clientAPI.binding;//Get bindings from page
  let context = clientAPI.getPageProxy()

  //Get Signature Value
  let signature = context.evaluateTargetPath("#Control:SignatureArrv/#Value")

  //Step 1 : Validate Signature
  if (!signature) {
    alert("Signature required!!!")
    context.dismissActivityIndicator()
    return
  }

  // Show initial indicator only before async calls
  context.showActivityIndicator("Reporting Event...");

  // Step 2: Set action binding for ReportEvent & Signature upload
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
    delv_number: '',
    keyrec: '',
    recipient: ''
  };
  //Get Content & content type
  const media = context.evaluateTargetPath("#Page:ArrivalEvent/#Control:SignatureArrv/#Value");
  // Step 3: Report event
  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
    context.dismissActivityIndicator()
    context.showActivityIndicator("Uploading signature");
    return context.executeAction({
      Name: "/driverapp/Actions/attachmentdwld/Attachment/CreateSign.action",
      Properties: {
        Headers: { Slug: encodeURI(JSON.stringify(slug)) },
        // Properties: {
        //   tor_id: tor_id
        // }
        // Media: ["#Page:ArrivalEvent/#Control:SignatureArrv/#Value"]
        Media: [media]
      }
    }).then(() => {
      context.dismissActivityIndicator()      
      return context.executeAction({
        Name: "/driverapp/Actions/action/Service/ShowMessage.action",
        Properties: {
          Title: "Success",
          Message: `Event reported and signature uploaded for ${locid}. Please refresh the app.`
        }
      });
    }).catch((err) => {
      context.dismissActivityIndicator()      
      return context.executeAction({
        Name: "/driverapp/Actions/action/Service/ShowMessage.action",
        Properties: {
          Title: "Error",
          Message: `Failed to upload ${err}`
        }
      });
    });
  }).catch((err) => {
    context.dismissActivityIndicator()    
    return context.executeAction({
      Name: "/driverapp/Actions/action/Service/ShowMessage.action",
      Properties: {
        Title: "Error",
        Message: `Failed to report event ${err}`
      }
    });
  }).finally(() => {
    context.dismissActivityIndicator();    
  })
}
