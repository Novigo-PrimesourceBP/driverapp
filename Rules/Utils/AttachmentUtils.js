/**
 * This function likely builds the full local path (file system path)
 * for an attachment based on its metadata
 * @param {IClientAPI} clientAPI
 */
const fs = require('@nativescript/core/file-system');
export default function imageToPath(bindingObject) {
    let filename    = bindingObject.alternative_name;
    let key         = bindingObject.doc_key;
    var tempDir     = fs.knownFolders.documents();
    return fs.path.join(tempDir.path, key, filename);
}