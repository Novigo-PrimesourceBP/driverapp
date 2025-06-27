/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function OnDocumentUpload(clientAPI) {

    const context = clientAPI.getPageProxy();
    let { tor_id } = clientAPI.binding;
    const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:Detail/#Control:AttachmentFormCell");
    const attachmentList = clientAPI.evaluateTargetPath('#Page:Detail/#Control:AttachmentFormCell/#Value');
    // const attachment = attachmentList[0];

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
    }
    let attachmentPromises = []
    attachmentList.forEach(attachment => {
        const fileName = attachment.urlString.match(/(.+)\/(.+\..+)$/)[2];
        const slug = {
            tor_id: tor_id,
            description: '',
            attachment_type: 'ATCMT',
            alternative_name: fileName
        };
        attachmentPromises.push(
            context.sendRequest(targetUrl, {
                "method": "POST",
                'header': {
                    "Content-Type": attachment.contentType,
                    "x-csrf-token": token,
                    "Slug": encodeURI(JSON.stringify(slug))
                },
                "body": attachment.content
            })
        )
    });
    Promise.all(attachmentPromises).then((values) => {
        alert("Uploaded Images")
    }).catch((error) => {
        alert("Failed to upload images")
    }).finally(() => {
        attachmentFormCell.setValue([]);
    });
    return

    ////////////////////////
    const fileName = attachment.urlString.match(/(.+)\/(.+\..+)$/)[2];
    const slug = {
        tor_id: tor_id,
        description: '',
        attachment_type: 'ATCMT',
        alternative_name: fileName
    };
    attachmentFormCell.setValue([]);
    return context.sendRequest(`/action`, {
        "method": "GET",
        'header': {
            "x-csrf-token": "fetch",
        }
    }).then((response) => {
        let token = response.headers["x-csrf-token"];
        let targetUrl = `/action/AttachmentSet`;
        return context.sendRequest(targetUrl, {
            "method": "POST",
            'header': {
                "Content-Type": attachment.contentType,
                "x-csrf-token": token,
                "Slug": encodeURI(JSON.stringify(slug))
            },
            "body": attachment.content
        });
    }).then(response => {
        attachmentFormCell.setValue([]);
        alert("Uploaded Image")
    }).catch(error => {
        alert(error);
    });

}
