/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function OnDocumentUpload(clientAPI) {
    const context = clientAPI.getPageProxy();
    let { tor_id,locid } = clientAPI.binding;
    const attachmentFormCell = clientAPI.evaluateTargetPathForAPI("#Page:DetailPage/#Control:AttachmentFormCell");
    if(attachmentFormCell.getValue().length > 0 ){
        
    }
    
}
