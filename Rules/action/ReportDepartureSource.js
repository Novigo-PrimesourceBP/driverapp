/**
 * This function reports Departure event for the Source location
 * Proprietary Notice:
--The Driver App is proprietary to ArchLynk.
--Customer is granted a limited, non-transferable license to use this App only 
--within their internal environment during the engagement.
--Any modification voids ArchLynk’s support obligations.
--Disclosure, redistribution, or removal of ArchLynk branding is strictly prohibited.
--Unauthorized use may result in legal action.
 * @param {IClientAPI} clientAPI
 */
export default function ReportDeparture(clientAPI) {
  let { tor_id, src_locid } = clientAPI.binding;
  let context = clientAPI.getPageProxy()
  context.showActivityIndicator("Reporting Event......");
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'DEPARTURE',
    event_reason: '',
    ext_loc_id: src_locid,
    event_time: '' + new Date().getTime()
  });
  try {
    return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
      return context.executeAction("/driverapp/Actions/ClosePage.action") 
        .then(() => {
          context.dismissActivityIndicator();
          return context.executeAction({
            Name: "/driverapp/Actions/Console.action",
            Properties: {
              Message: "Event Reported successfully. Kindly refresh the app to sync",
            },
          });
        }).catch((err) => {
          context.dismissActivityIndicator()
        });
    }).catch((err) => {
      context.dismissActivityIndicator()
    })
  } catch (error) {
    context.dismissActivityIndicator()
  }

}
