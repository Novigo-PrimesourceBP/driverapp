/**
 * Check if attachment exists locally and return status.
 * @param {IClientAPI} clientAPI
 */
// const imageToPath = require('../Utils/AttachmentUtils').default;
// const fs = require('@nativescript/core/file-system');

// export default function DownloadProgress(clientAPI) {
//     const bindingObject = clientAPI.binding;
//     const filePath = imageToPath(bindingObject);

//     const fileExists = fs.File.exists(filePath); 

//     return fileExists ? "open" : "toDownload";
// }
export default function DownloadProgress(clientAPI) {
    const binding = clientAPI.binding;

    if (!binding || !binding['@odata.readLink']) {
        console.warn('No binding or readLink found');
        return Promise.resolve('toDownload'); // Default to not downloaded
    }

    const readLink = binding['@odata.readLink'];
    const serviceName = '/driverapp/Services/attachmentdwld.service';
    const entitySet = 'AttachmentDwld';

    return clientAPI.isMediaLocal(serviceName, entitySet, readLink)
        .then(isLocal => {
            return isLocal ? 'open' : 'toDownload';
        })
        .catch(err => {
            console.error('Error checking local media:', err);
            return 'toDownload'; // Fallback state on error
        });
}


