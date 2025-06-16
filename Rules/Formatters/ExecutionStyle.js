export default function FormatExecutionStyle(clientAPI) {
    let execution = clientAPI.binding.execution;
    switch (execution) {
        case '04':
            return 'Success';
        case '03':
            return 'Default';
        case '07':
            return 'Warning';
        case '02':
            return 'Danger';
        default:
            return 'Default';
    }
}