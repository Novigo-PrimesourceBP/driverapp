    /**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
const fs = require('@nativescript/core/file-system');
const imageToPath = require('../Utils/AttachmentUtils').default;

export default function DocumentSave(context) {
    alert( "savetrigger")
    const clientApi = context.getPageProxy();
    const binding = clientApi.getActionBinding();
    const fileName = imageToPath(binding);
    const file = fs.File.fromPath(fileName);
    file.writeSync(clientApi.getActionResult("DownloadDocument").data, err => {
        file.remove();
        alert(err);
        return;
    });
}

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
