/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ReportDepartureConfirmation(clientAPI) {
    let stop = clientAPI.binding.name
    let message = `Reporting Departure at location ${stop}`
    let context = clientAPI.getPageProxy()
    context.setActionBinding({
        'message': message
    });
    return context.executeAction("/driverapp/Actions/action/Service/ReportEventConfirmation.action")
}
