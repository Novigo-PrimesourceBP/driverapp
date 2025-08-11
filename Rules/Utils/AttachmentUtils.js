import GetExtensionfromMIME from '../attachmentdwld/GetExtensionfromMIME';

/**
 * This function likely builds the full local path (file system path)
 * for an attachment based on its metadata
 * @param {IClientAPI} clientAPI
 */
const fs = require('@nativescript/core/file-system');
export default function imageToPath(bindingObject) {
    let filename    = bindingObject.alternative_name;
    let key         = bindingObject.doc_key;
    let mimecode    = bindingObject.mimecode;
    //Get the extension based on MIME code
    const ext = GetExtensionfromMIME(mimecode);
    
    // Ensure filename has an extension
    if (!filename.includes('.')) {
        filename += `.${ext}`;
    }
    var tempDir     = fs.knownFolders.documents();
    return fs.path.join(tempDir.path, key, filename);
}