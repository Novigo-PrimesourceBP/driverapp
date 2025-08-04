
const fs = require('@nativescript/core/file-system');
const imageToPath = require('../Utils/AttachmentUtils').default;

export default async function OnDocumentPress(context) {
    const clientApi = context.getPageProxy();
    const pressedItem = clientApi.getPressedItem();
    const bindingObject = clientApi.getActionBinding();
    const fileName = imageToPath(bindingObject);
    if (fs.File.exists(fileName)) {
        clientApi.setActionBinding({
            'FilePath': fileName,
        });
        return clientApi.executeAction("/driverapp/Actions/action/Service/Attachment/OpenDocument.action");
    } else {
        // const readLink = `AttachmentSet(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}',name='',description='',alternative_name='',folder='',attachment_type='',filesize_content='')`;
        // clientApi.setActionBinding({
        //     attachreadLink: readLink,
        //     alternative_name: bindingObject.alternative_name,
        //     doc_key: bindingObject.doc_key
        // });
        // return clientApi.executeAction("/driverapp/Actions/Service/Attachment/DownloadDocument.action").then(() => {
        //     let section = clientApi.getControl('SectionedTable0').getSection('TAttachments');
        //     section.setIndicatorState("open", pressedItem);
        // });
        alert( " error" )
    }    
}
