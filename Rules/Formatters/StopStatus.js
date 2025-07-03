/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function StopStatus(clientAPI) {
    let status = clientAPI.binding.status;
    switch (status) {
        case 'Planned':
            return clientAPI.localizeText('xtit_stopstatus_planned');
        case 'At Store':
            return clientAPI.localizeText('xtit_stopstatus_atstore');
        case 'Departed':
            return clientAPI.localizeText('xtit_stopstatus_departed');
        default:
            return status;
    }
}
