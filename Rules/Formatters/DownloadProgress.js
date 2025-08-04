/**
 * Check if attachment exists locally and return status.
 * @param {IClientAPI} clientAPI
 */
const imageToPath = require('../Utils/AttachmentUtils').default;
const fs = require('@nativescript/core/file-system');

export default function DownloadProgress(clientAPI) {
    const bindingObject = clientAPI.binding;
    const filePath = imageToPath(bindingObject);

    const fileExists = fs.File.exists(filePath); 

    return fileExists ? "open" : "toDownload";
}
