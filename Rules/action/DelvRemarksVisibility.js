/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function DelvRemarksVisibility(clientAPI) {
    let context = clientAPI.getPageProxy()
    let evtreason = context.evaluateTargetPath("#Control:EventReason/#SelectedValue")
    let remark = context.evaluateTargetPath("#Control:Remarks")
    //Validation
    if (!evtreason) {
        alert("Please select the delivery")
        return
    }   
    //Set Remarks Visibility
      if (evtreason === `Delivered- With Exceptions`) {
            remark.setVisible(true);
        } else {
            remark.setVisible(false);
        }            
}

