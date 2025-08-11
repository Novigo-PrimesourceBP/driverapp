export default function AttachmentDate(clientAPI) {
    const binding = clientAPI.binding;
    const raw = binding?.created_at;

    if (!raw || raw.length < 8) {
        return '';
    }

    const year = raw.substring(0, 4);
    const month = raw.substring(4, 6);
    const day = raw.substring(6, 8);

    // Return in preferred format
    return `${month}/${day}/${year}`; 
}
