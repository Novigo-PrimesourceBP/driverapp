/**
 * Generates the filename from type
 * @param {IClientAPI} clientAPI
 */
export default function GenerateFileName(attachment, attachmentType) {    
    const type = attachmentType || 'ATCMT';
    const timestamp = new Date().toISOString()
        .replace(/[-:]/g, '')
        .replace('T', '-')
        .slice(0, 15);

    return `${type}-${timestamp}`;
}
