// import ShowInlineValidationView from "../ShowInlineValidationView";

// /**
//  * Check keyrec is entered based on Payee from FU   
//  * @param {IClientAPI} clientAPI
//  */
// export default function ValidateKeyrec(clientAPI) {
// //     const control = clientAPI.evaluateTargetPath("#Page:-Current/#Control:KeyRec");
// //     const keyrecinput = control.getValue();

// //     // Validate if KeyRec is not empty
// //     if (!keyrecinput) {
// //         ShowInlineValidationView(clientAPI, control, "This field is required.");
// //         return;
// //     }

// //     // Validation is successful - Clear validation message
// //     ShowInlineValidationView(clientAPI, control, "", true);
// // }


//     const context = clientAPI.getPageProxy();
//     const value = clientAPI.evaluateTargetPath("#Page:-Current/#Control:KeyRec");

//     if (!value || value.trim() === '') {
//         context.getControl("KeyRec").applyValidationMessage("Customer name is required.");
//     } else {
//         context.getControl("KeyRec").clearValidationMessage();
//     }
// }
import ShowInlineValidationView from "../ShowInlineValidationView";

/**
 * Check keyrec is entered based on Payee from FU   
 * @param {IClientAPI} clientAPI
 */
export default function ValidateKeyrec(clientAPI) {
    const context = clientAPI.getPageProxy();
    const value = context.evaluateTargetPath("#Control:KeyRec/#Value"); // get value from control

    const control = context.getControl("KeyRec"); // get control reference properly

    if (!value || value.trim() === '') {
        control.applyValidationMessage("KeyRec is required.");
    } else {
        control.clearValidationMessage();
    }
}
