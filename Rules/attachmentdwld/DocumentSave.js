    /**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
// const fs = require('@nativescript/core/file-system');
// const imageToPath = require('../Utils/AttachmentUtils').default;

// export default function DocumentSave(context) {
//     alert( "savetrigger")
//     const clientApi = context.getPageProxy();
//     const binding = clientApi.getActionBinding();
//     const fileName = imageToPath(binding);
//     const file = fs.File.fromPath(fileName);
//     file.writeSync(clientApi.getActionResult("DownloadDocument").data, err => {
//         file.remove();
//         alert(err);
//         return;
//     });
// }

// const fs = require('@nativescript/core/file-system');
// const imageToPath = require('../Utils/AttachmentUtils').default;

// export default function DocumentSave(context) {
//     const clientApi = context.getPageProxy();
//     const binding = clientApi.getActionBinding();
//     const filePath = imageToPath(binding);

//     // Ensure the target folder exists
//     const folderPath = filePath.substring(0, filePath.lastIndexOf('/'));
//     fs.Folder.fromPath(folderPath); // Creates folder if it doesn't exist

//     // Get the binary data from the OData download
//     const binaryData = context.getActionResult().data;

//     if (!binaryData) {
//         console.error("❌ No binary data received.");
//         alert("Download failed: No file data found.");
//         return Promise.resolve();
//     }

//     try {
//         const file = fs.File.fromPath(filePath);
//         file.writeSync(binaryData); // write in binary
//         alert("✅ File saved to:\n" + filePath);
//     } catch (err) {
//         console.error("❌ Error saving file:", err);
//         alert("❌ Error saving file:\n" + err);
//     }

//     return Promise.resolve(); // ensure the action chain continues
// }
const fs = require('@nativescript/core/file-system');
import GetExtensionfromMIME from './GetExtensionfromMIME';

export default function DocumentSave(context) {
    alert( "docsave started");
    const pageProxy = context.getPageProxy();
    const binding = pageProxy.getActionBinding();

    // Get downloaded result (from DownloadMedia)
    const result = context.getActionResult('DownloadDocument');
    const contentType = result.headers?.get('Content-Type') || 'application/octet-stream';
    const extension = GetExtensionfromMIME(contentType);

    let baseName = binding.description || binding.name || 'document';
    baseName = baseName.replace(/[\\/:*?"<>|]/g, '_');
    const filename = `${baseName}.${extension}`;

    const tempDir = fs.knownFolders.temp();
    const fullPath = fs.path.join(tempDir.path, filename);

    try {
        const file = fs.File.fromPath(fullPath);
        file.writeSync(result.data); // Write downloaded data
        pageProxy.setActionBinding({ FileName: fullPath });

        // Open the document
        return pageProxy.executeAction('/driverapp/Actions/attachmentdwld/Attachment/OpenDocument.action');
    } catch (err) {
        console.error('Failed to save file locally:', err);
        alert('Failed to save document:\n' + err);
    }
}
