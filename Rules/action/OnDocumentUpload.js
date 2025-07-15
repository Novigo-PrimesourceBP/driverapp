/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function OnDocumentUpload(clientAPI) {

    const context = clientAPI.getPageProxy();
    // context.showActivityIndicator("Processing .......")
    let { tor_id, locid } = clientAPI.binding;
    const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:Stop/#Control:AttachmentFormCell");
    const attachmentList = clientAPI.evaluateTargetPath('#Page:Stop/#Control:AttachmentFormCell/#Value');

    if (attachmentList.length > 1) {
        alert("Upload one attachment at a time")
        return
    }

    const attachment = attachmentList[0];
    const fileName = attachment.urlString.match(/(.+)\/(.+\..+)$/)[2];
    const slug = {
        tor_id: tor_id,
        description: fileName,
        attachment_type: clientAPI.evaluateTargetPath('#Control:AttachmentType/#SelectedValue') ?? 'ATCMT',
        alternative_name: fileName,
        folder: locid
    };

    let token;
    let targetUrl = `/action/AttachmentSet`;
    try {
        context.dismissActivityIndicator()
        context.showActivityIndicator("Uploading attachment...")
        let response = await context.sendRequest(`/action`, {
            "method": "GET",
            'header': {
                "x-csrf-token": "fetch",
            }
        });
        token = response.headers["x-csrf-token"]
        
        return context.sendRequest(targetUrl, {
            "method": "POST",
            'header': {
                "Content-Type": attachment.contentType,
                "x-csrf-token": token,
                "Slug": encodeURI(JSON.stringify(slug))
            },
            "body": attachment.content
        }).then(() => {
            context.dismissActivityIndicator()
            alert("Successfully uploaded")            
            attachmentFormCell.setValue([]);
            return context.executeAction("/driverapp/Actions/ClosePage.action")
        }).catch((err) => {
            context.dismissActivityIndicator()
            alert(`Failed to upload ${err}`)            
            attachmentFormCell.setValue([]);
            return context.executeAction("/driverapp/Actions/ClosePage.action")
        });

    } catch (error) {
        alert(error)
        context.dismissActivityIndicator()
        attachmentFormCell.setValue([]);
        return context.executeAction("/driverapp/Actions/ClosePage.action")
    }
}
