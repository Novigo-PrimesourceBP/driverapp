/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ReportDeparture(clientAPI) {
    let { tor_id,name,locid,stop_id } = clientAPI.binding;
    let context = clientAPI.getPageProxy()
    context.showActivityIndicator("Reporting Event......");
    alert(`${tor_id}-${name}-${locid}`)
    context.setActionBinding({
        tor_id: tor_id,
        event_code: 'DEPARTURE',
        event_reason: '',
        ext_loc_id: locid,
        event_time: ''+ new Date().getTime()
    });
    try {
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
    } catch (error) {
        context.dismissActivityIndicator()
    }
    
}
