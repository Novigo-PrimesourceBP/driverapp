/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnDocumentUpload(clientAPI) {

    const context = clientAPI.getPageProxy();
    let { tor_id } = clientAPI.binding;
    const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:Detail/#Control:AttachmentFormCell");
    const attachmentList = clientAPI.evaluateTargetPath('#Page:Detail/#Control:AttachmentFormCell/#Value');
    const attachment = attachmentList[0];
    const fileName = attachment.urlString.match(/(.+)\/(.+\..+)$/)[2];
    // alert(`Filename - ${fileName}`)
    context.setActionBinding({
        tor_id: tor_id,
        name: fileName
    });
    attachmentFormCell.setValue([]);
    return context.executeAction("/driverapp/Actions/action/Service/UploadAttachment.action").then(() => {
        return context.executeAction({
            Name: "/driverapp/Actions/Console.action",
            Properties: {
                Message: "File uploaded successfully. Kindly refresh the app to sync",
            },
        });
    }).catch((err) => {
        alert(err)
    })

}
