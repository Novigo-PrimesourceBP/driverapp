/**
 * Upload multiple attachments sequentially, show success/error summary.
 * @param {IClientAPI} clientAPI
 */
export default async function OnMulDocUpload(clientAPI) {

    const context = clientAPI.getPageProxy();
    const { tor_id, locid } = clientAPI.binding;

    const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:Attachment/#Control:AttachmentFormCellNew");
    const attachmentList = clientAPI.evaluateTargetPath('#Page:Attachment/#Control:AttachmentFormCellNew/#Value');
    const attachmentType = clientAPI.evaluateTargetPath('#Control:AttachmentTypeNew/#SelectedValue');

    // Validation
    if (!attachmentType) {
        alert("Please select attachment type.");
        return;
    }

    if (!attachmentList || attachmentList.length === 0) {
        alert("Please upload at least one attachment.");
        return;
    }

    // Fetch CSRF token
    let token;
    const targetUrl = `/action/AttachmentSet`;

    try {
        const response = await context.sendRequest(`/action`, {
            method: "GET",
            header: { "x-csrf-token": "fetch" }
        });
        token = response.headers["x-csrf-token"];
    } catch (tokenError) {
        alert(`Error fetching token: ${tokenError.message || tokenError}`);
        return;
    }

    // Sequential Upload - One by one
    try {
        context.showActivityIndicator("Uploading attachments...");

        const results = [];

        for (const attachment of attachmentList) {
            // Generate filename with timestamp
            const timestamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '_').slice(0, 15);
            const fileName = `${attachmentType}_${timestamp}`;

            const slug = {
                tor_id: tor_id,
                description: '',
                attachment_type: attachmentType,
                alternative_name: fileName,
                folder: locid
            };

            try {
                await context.sendRequest(targetUrl, {
                    method: "POST",
                    header: {
                        "Content-Type": attachment.contentType,
                        "x-csrf-token": token,
                        "Slug": encodeURI(JSON.stringify(slug))
                    },
                    body: attachment.content
                });

                results.push({ fileName, success: true });

            } catch (uploadError) {
                const errorMsg = uploadError?.message || uploadError.toString();
                results.push({ fileName, success: false, error: errorMsg });
            }
        }

        context.dismissActivityIndicator();

        //Summary
        const successCount = results.filter(r => r.success).length;
        const errorMessages = results
            .filter(r => !r.success)
            .map(r => `❌ ${r.fileName}: ${r.error}`);

        let summaryMessage = `✅ Successfully uploaded ${successCount} file(s).`;
        if (errorMessages.length > 0) {
            summaryMessage += `\n\nErrors:\n${errorMessages.join('\n')}`;
        }

        alert(summaryMessage);

    } catch (error) {
        context.dismissActivityIndicator();
        alert(`Unexpected error: ${error.message || error}`);
    } finally {
        //Cleanup
        attachmentFormCell.setValue([]);
        return context.executeAction("/driverapp/Actions/ClosePage.action");
    }
}
