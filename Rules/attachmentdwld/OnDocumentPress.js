/**
 * This rule runs when the user taps on an attachment.
 * If the file exists locally → open it.
 * If it doesn't → download it via OData and then open it.
 * @param {IClientAPI} context
 */

const fs = require('@nativescript/core/file-system');
const imageToPath = require('../Utils/AttachmentUtils').default;

export default async function OnDocumentPress(context) {
    const clientApi = context.getPageProxy();
    const pressedItem = clientApi.getPressedItem();

    try {
        // Step 1: Get the object bound to the pressed item
        const bindingObject = clientApi.getActionBinding();
        // alert("Step 1: Retrieved action binding:\n" + JSON.stringify(bindingObject));

        // Step 2: Generate the full file path
        const fileName = imageToPath(bindingObject);
        // alert("Step 2: Computed file path:\n" + fileName);

        // Step 3: Check if the file exists locally
        const fileExists = fs.File.exists(fileName);
        // alert("Step 3: File exists? " + fileExists);

        if (fileExists) {
            // File already downloaded — open it
            alert("Step 4: Opening file directly");
            clientApi.setActionBinding({
                FilePath: fileName,
            });

            return clientApi.executeAction("/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action")
                .catch(err => {
                    alert("Error opening document:\n" + err);
                });

        } else {
            // File not found — download it from backend
            // alert("Step 4: File not found, attempting download...");
            // const readLink = `AttachmentDwld(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}')`;

            // const readLink = `AttachmentDwld(Keyrec='',tor_id='${bindingObject.tor_id}',DelvNumber='', 
            // doc_key='${bindingObject.doc_key}',name='',Recipient='',alternative_name='',description='', 
            // filesize_content='',folder='',attachment_type='')`;

            // Construct the proper OData read link with $value
            // const readLink = `AttachmentDwld(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}')/$value`;
            // const readLink = `AttachmentDwld(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}')`;
            // const readLink = `AttachmentDwld(tor_id='6100000726',doc_key='B71E18A5447A1FE09CDAF402907C184C')`;
            
            // clientApi.setActionBinding({
            //     "@odata.readLink": readLink,              
            //     doc_key: bindingObject.doc_key,
            //     tor_id: bindingObject.tor_id
            // });

            
            // const torIdEscaped = bindingObject.tor_id.replace(/'/g, "''");
            // const docKeyEscaped = bindingObject.doc_key.replace(/'/g, "''");
            
            // Final readLink value
            // const readLink = `AttachmentDwld(tor_id='${tor_id}',doc_key='${doc_key}')`;
            // alert("Step 5: Using OData readLink:\n" + readLink);
            // Pass the readLink using @odata.readLink (with quotes!)

            clientApi.setActionBinding({
                attachreadLink:`AttachmentDwld(tor_id='6100000726',doc_key='B71E18A5447A1FE09CDAF402907C184C')`,
                tor_id: bindingObject.tor_id,
                doc_key: bindingObject.doc_key
            });
                        
            return clientApi.executeAction("/driverapp/Actions/attachmentdwld/Attachment/DownloadDocument.action")
                .then(() => {
                    alert("Step 6: Download action executed successfully");

                    const section = clientApi.getControl('SectionedTable0').getSection('TAttachments');
                    section.setIndicatorState("open", pressedItem);
                })
                .catch(err => {
                    alert("Step 6: Error during download:\n" + err);
                });
        }

    } catch (error) {
        alert("Uncaught error in OnDocumentPress:\n" + error);
    }
}