/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ReportArrival(clientAPI) {
    let stop = clientAPI.binding.name
    let message = `Reporting event Arrival at location ${stop}`
    let context = clientAPI.getPageProxy()
    context.setActionBinding({
        'message': message
    });
    return context.executeAction("/driverapp/Actions/action/Service/ReportEventConfirmation.action")
}
