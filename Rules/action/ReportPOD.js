/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ReportPOD(clientAPI) {
    let { tor_id,name,locid,stop_id } = clientAPI.binding;
    let context = clientAPI.getPageProxy()
    let event_reason = context.evaluateTargetPath(
        "#Control:EventReason/#SelectedValue"
    );
    context.showActivityIndicator("Reporting Event......");
    // alert(`${tor_id}-${name}-${locid}-${stop_id}-${event_reason}`)
    context.setActionBinding({
        tor_id: tor_id,
        event_code: 'POD',
        event_reason: event_reason,
        ext_loc_id: locid,
        event_time: ''+ new Date().getTime()
    });
    return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(()=>{
        return context
          .executeAction("/driverapp/Actions/ClosePage.action")
          .then(() => {
            context.dismissActivityIndicator();
            return context.executeAction({
              Name: "/driverapp/Actions/Console.action",
              Properties: {
                Message: "Event Reported successfully. Kindly refresh the app to sync",
              },
            });
          });
    })
}
