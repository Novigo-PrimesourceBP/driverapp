/**
 * Navigates to the Delivered Items when a delivery is selected from POD page
 * @param {IClientAPI} clientAPI
 */
export default function OpenDelvItems(clientAPI) {
    let context = clientAPI.getPageProxy()
    //Get Selected Value
    let delv_num = context.evaluateTargetPath( "#Control:Delivery/#Value" );   
        
    //Validate if selected atleast one delivery
    if (
      delv_num === null ||
      delv_num === undefined ||
      delv_num === '' ||
      delv_num === 'None' ||
      (typeof delv_num === 'object' && Object.keys(delv_num).length === 0)
  ) {
      alert("Please select a Delivery!!");
      return;
  } else {
    //Navigate to Delivered Items
    return context.executeAction("/driverapp/Actions/Navigation/ToDelvItems.action");
  }
}