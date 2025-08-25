/**
 * This rule runs when the user taps on an attachment.
 * If the file exists locally → open it.
 * If it doesn't → download it via OData and then open it.
 * @param {IClientAPI} context
 */

// const fs = require('@nativescript/core/file-system');
// const imageToPath = require('../Utils/AttachmentUtils').default;

// export default async function OnDocumentPress(context) {
//     const clientApi = context.getPageProxy();
//     const pressedItem = clientApi.getPressedItem();

//     try {
//         // Step 1: Get the object bound to the pressed item
//         const bindingObject = clientApi.getActionBinding();
//         // alert("Step 1: Retrieved action binding:\n" + JSON.stringify(bindingObject));

//         // Step 2: Generate the full file path
//         const fileName = imageToPath(bindingObject);
//         // alert("Step 2: Computed file path:\n" + fileName);

//         // Step 3: Check if the file exists locally
//         const fileExists = fs.File.exists(fileName);
//         // alert("Step 3: File exists? " + fileExists);

//         if (fileExists) {
//             // File already downloaded — open it
//             alert("Step 4: Opening file directly");
//             clientApi.setActionBinding({
//                 FilePath: fileName,
//             });

//             return clientApi.executeAction("/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action")
//                 .catch(err => {
//                     alert("Error opening document:\n" + err);
//                 });

//         } else {
//             // File not found — download it from backend
//             // alert("Step 4: File not found, attempting download...");
//             // const readLink = `AttachmentDwld(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}')`;

//             // const readLink = `AttachmentDwld(Keyrec='',tor_id='${bindingObject.tor_id}',DelvNumber='', 
//             // doc_key='${bindingObject.doc_key}',name='',Recipient='',alternative_name='',description='', 
//             // filesize_content='',folder='',attachment_type='')`;

//             // Construct the proper OData read link with $value
//             // const readLink = `AttachmentDwld(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}')/$value`;
//             // const readLink = `AttachmentDwld(tor_id='${bindingObject.tor_id}',doc_key='${bindingObject.doc_key}')`;
//             // const readLink = `AttachmentDwld(tor_id='6100000726',doc_key='B71E18A5447A1FE09CDAF402907C184C')`;

//             // clientApi.setActionBinding({
//             //     "@odata.readLink": readLink,              
//             //     doc_key: bindingObject.doc_key,
//             //     tor_id: bindingObject.tor_id
//             // });


//             // const torIdEscaped = bindingObject.tor_id.replace(/'/g, "''");
//             // const docKeyEscaped = bindingObject.doc_key.replace(/'/g, "''");

//             // Final readLink value
//             // const readLink = `AttachmentDwld(tor_id='${tor_id}',doc_key='${doc_key}')`;
//             // alert("Step 5: Using OData readLink:\n" + readLink);
//             // Pass the readLink using @odata.readLink (with quotes!)

//             clientApi.setActionBinding({
//                 attachreadLink:`AttachmentDwld(tor_id='6100000726',doc_key='B71E18A5447A1FE09CDAF402907C184C')`,
//                 tor_id: bindingObject.tor_id,
//                 doc_key: bindingObject.doc_key
//             });

//             return clientApi.executeAction("/driverapp/Actions/attachmentdwld/Attachment/DownloadDocument.action")
//                 .then(() => {
//                     alert("Step 6: Download action executed successfully");

//                     const section = clientApi.getControl('SectionedTable0').getSection('TAttachments');
//                     section.setIndicatorState("open", pressedItem);
//                 })
//                 .catch(err => {
//                     alert("Step 6: Error during download:\n" + err);
//                 });
//         }

//     } catch (error) {
//         alert("Uncaught error in OnDocumentPress:\n" + error);
//     }


//     const pageProxy = context.getPageProxy();
//     const bindingObject = pageProxy.getActionBinding();
//     const readLink = bindingObject["@odata.readLink"];
//     const serviceName = '/driverapp/Services/attachmentdwld.service';
//     const entitySet = 'AttachmentDwld';

//     return context.isMediaLocal(serviceName, entitySet, readLink).then((isLocal) => {
//         if (isLocal) {
//             // File exists locally
//             const fs = require('@nativescript/core/file-system');
//             const actionBinding = pageProxy.getActionBinding();

//             if (!actionBinding) {
//                 const msg = "Action binding is missing.";
//                 console.error(msg);
//                 alert(msg);                    
//             }

//             const key = actionBinding['@odata.readLink'];
//             let filename = actionBinding.description || actionBinding.FileName || actionBinding.SaveDocFile || "res://TestOpenDocument.pdf";

//             // Extract filename from full path
//             const segments = filename.split('/');
//             filename = segments[segments.length - 1];

//             if (key) {
//                 const tempDir = fs.knownFolders.temp();
//                 const tempPath = fs.path.join(tempDir.path, filename);
//                 const tempFile = fs.File.fromPath(tempPath);

//                 try {
//                     tempFile.writeSync(pageProxy.getClientData()[key]);
//                     pageProxy.setActionBinding({ 'FileName': tempPath });

//                     return context.executeAction('/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action');
//                 } catch (err) {
//                     console.error("Error writing file to temp path:", err);
//                     alert("Error writing file:\n" + err);                        
//                 }
//             } else {
//                 const msg = "Key not found for document.";
//                 console.error(msg);
//                 alert(msg);                    
//             }

//         } else {
//             // File is not local — download it
//             const pressedItem = pageProxy.getPressedItem();
//             const objectTableSection = context.getSections()[0];

//             objectTableSection.setIndicatorState("inProgress", pressedItem);

//             return context.executeAction('/driverapp/Actions/attachmentdwld/Attachment/DownloadDocument.action')
//                 .then(() => {
//                     objectTableSection.setIndicatorState("open", pressedItem);
//                 })
//                 .catch((err) => {
//                     console.error("Error downloading document:", err);
//                     alert("Download failed:\n" + err);
//                     objectTableSection.setIndicatorState("toDownload", pressedItem);                        
//                 });
//         }
//     }).catch((err) => {
//         console.error("Error checking local media:", err);
//         alert("Unexpected error:\n" + err);            
//     });
// }

// import GetExtensionfromMIME from './GetExtensionfromMIME';
// const fs = require('@nativescript/core/file-system');

// export default async function OnDocumentPress(context) {
//     const clientApi = context.getPageProxy();
//     const binding = clientApi.getActionBinding();

//     const readLink = `AttachmentDwld(tor_id='${binding.tor_id}',doc_key='${binding.doc_key}')`;
//     const serviceName = '/driverapp/Services/attachmentdwld.service';
//     const entitySet = 'AttachmentDwld';

//     // Step 1: Check if media is local
//     return context.isMediaLocal(serviceName, entitySet, readLink).then(async (isLocal) => {
//         if (isLocal) {
//             // File already downloaded, open it
//             return clientApi.executeAction('/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action');
//         } else {
//             // Not downloaded — download and save
//             clientApi.setActionBinding({
//                 "@odata.readLink": readLink,
//                 tor_id: binding.tor_id,
//                 doc_key: binding.doc_key,
//             });

//             return clientApi.executeAction('/driverapp/Actions/attachmentdwld/Attachment/DownloadDocument.action')
//                 .then(() => {
//                     const result = context.getActionResult('DownloadDocument');
//                     const data = result?.data;
//                     const mime = result?.headers?.get('Content-Type') || 'application/octet-stream';

//                     if (!data) {
//                         throw new Error('No data returned from download.');
//                     }

//                     // Step 2: Build filename
//                     let baseName = binding.description || binding.name || 'document';
//                     baseName = baseName.replace(/[\\/:*?"<>|]/g, '_'); // Sanitize

//                     const extension = GetExtensionfromMIME(mime);
//                     const filename = `${baseName}.${extension}`;
//                     const tempDir = fs.knownFolders.temp();
//                     const fullPath = fs.path.join(tempDir.path, filename);

//                     // Step 3: Write the file to disk
//                     const file = fs.File.fromPath(fullPath);
//                     file.writeSync(data);

//                     // Step 4: Open it
//                     clientApi.setActionBinding({ FileName: fullPath });
//                     return clientApi.executeAction('/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action');
//                 })
//                 .catch(err => {
//                     console.error("Download or save failed:", err);
//                     alert("Failed to download or open document:\n" + err);
//                 });
//         }
//     }).catch(err => {
//         console.error('Failed during document handling:', err);
//         alert('Document processing failed:\n' + err);
//     });
// }
const fs = require('@nativescript/core/file-system');
export default async function OnDocumentPress(context) {
    const clientApi = context.getPageProxy();
    const binding = clientApi.getActionBinding();

    const serviceName = '/driverapp/Services/attachmentdwld.service';
    const entitySet = 'AttachmentDwld';    
    const readLink = `AttachmentDwld(tor_id='${binding.tor_id}',doc_key='${binding.doc_key}')/$value`;

    clientApi.setActionBinding({
        "@odata.readLink": readLink,
        tor_id: binding.tor_id,
        doc_key: binding.doc_key,
    });
    alert('ReadLink: ' + readLink);

    try {
        const isLocal = await context.isMediaLocal( serviceName, entitySet, readLink);
        const actionPath = isLocal
            ? '/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action'
            : '/driverapp/Actions/attachmentdwld/Attachment/DownloadDocument.action';
        return clientApi.executeAction(actionPath);
    } catch (error) {
        console.error('Error checking media local or executing action:', error);
        alert('Failed to open or download document:\n' + error);
        return Promise.reject(error);
    }

}
