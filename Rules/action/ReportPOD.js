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
  let signature = context.evaluateTargetPath("#Control:SignatureSrc/#Value")
  let recipient = context.evaluateTargetPath("#Control:FormCellNote0/#Value")
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
    recipient: recipient

  });
  const slug = {
    tor_id: tor_id,
    description: '',
    attachment_type: 'ZSIG',
    alternative_name: 'POD-Signature',
    folder: locid
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
