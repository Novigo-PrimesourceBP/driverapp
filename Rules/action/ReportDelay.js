import ReportEvent from "./ReportEvent";

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function ReportDelay(clientAPI) {
let { tor_id, name, locid, stop_id } = clientAPI.binding;//Get bindings from page
let context = clientAPI.getPageProxy()

  context.showActivityIndicator("Reporting Event .......")
  //Get Selected Value
  let delay_reason = context.evaluateTargetPath(
    "#Control:Delay_Reason/#SelectedValue" );

//Validation
if (!delay_reason) {
    alert("Delay Reason required!!!")
    context.dismissActivityIndicator()    
  }
  //Set Binding
  context.setActionBinding({
    tor_id: tor_id,
    event_code: 'DELAYED',
    event_reason: delay_reason ,
    ext_loc_id: locid,
    event_time: '' + new Date().getTime(),    

  });

  //context.showActivityIndicator();

  return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action")
    .then(() => {
      return context.executeAction("/driverapp/Actions/ClosePage.action");
    })
    .then(() => {
      context.dismissActivityIndicator();
      return context.executeAction({
        Name: "/driverapp/Actions/Console.action",
        Properties: {
          Message: "Event Reported successfully. Kindly refresh the app to sync",
        },
      });
    })
    .catch((error) => {
      context.dismissActivityIndicator();
      alert(`Failed to report event: ${error}`);
    });
  
}
  
  