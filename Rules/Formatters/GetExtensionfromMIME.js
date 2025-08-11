/**
 * Helper to map MIME types to file extensions
 * @param {IClientAPI} clientAPI
 */
export default function GetExtensionfromMIME(mime) {
    const map = {
        'application/pdf': 'pdf',
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/bmp': 'bmp',
        'application/msword': 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'text/plain': 'txt',        
    };
    return map[mime] || 'bin'; // fallback to .bin if unknown
}
