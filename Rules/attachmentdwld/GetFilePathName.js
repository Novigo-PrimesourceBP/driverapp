/**
 * Rule to return the file path where the media will be saved
 * Called from the DownloadMedia action's "WriteToFilePath"
 * @param {IClientAPI} context
 * @returns {string} Full file path to save the media
 */

const fs = require('@nativescript/core/file-system');

export default function GetFilePathName(context) {
    // const binding = context.getPageProxy().getActionBinding();

    // const fileNameBase = binding.alternative_name || 'downloaded_file';
    // const mimeType = binding.mime || 'application/octet-stream';

    // const extension = getExtensionFromMime(mimeType);

    // // Optional: Clean file name (remove spaces or invalid chars)
    // const safeFileName = fileName.replace(/\s+/g, '_');

    // // Save under Documents folder on device (cross-platform safe)
    // const folder = fs.knownFolders.documents();
    // const fullPath = fs.path.join(folder.path, safeFileName);

    // return fullPath;
}
