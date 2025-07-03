/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function StopStatus(clientAPI) {
    let status = clientAPI.binding.status;
    switch (status) {
        case 'Planned':
            return 'Success';
        case 'At Store':
            return 'Default';
        case 'Departed':
            return 'Warning';
        default:
            return 'Default';
    }
}
