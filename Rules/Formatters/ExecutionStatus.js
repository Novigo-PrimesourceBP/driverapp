/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatExecutionStatus(context) {
    let execution = context.getBindingObject().execution;
    switch (execution) {
        case '04':
            return context.localizeText('xtit_orderstatus_completed');
        case '03':
            return context.localizeText('xtit_orderstatus_execution');
        case '07':
            return context.localizeText('xtit_orderstatus_ready');
        case '02':
            return context.localizeText('xtit_orderstatus_notstarted');
        default:
            return execution;
    }
}