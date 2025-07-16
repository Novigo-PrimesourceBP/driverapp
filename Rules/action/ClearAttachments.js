/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ClearAttachments(clientAPI) {
    const context = clientAPI.getPageProxy();
    const attachmentFormCell = context.evaluateTargetPathForAPI("#Page:Attachment/#Control:AttachmentFormCellNew");

    // Clear the attachments from the UI
    attachmentFormCell.setValue([]);

    // Optionally update the title or caption if it’s bound
    const titleControl = context.evaluateTargetPathForAPI("#Page:Attachment/#Control:AttachmentTitle");
    if (titleControl && titleControl.setCaption) {
        titleControl.setCaption("Attachments (0)");
    }

}