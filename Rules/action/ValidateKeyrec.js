import ShowInlineValidationView from "../ShowInlineValidationView";

/**
 * Check keyrec is entered based on Payee from FU   
 * @param {IClientAPI} clientAPI
 */
export default function ValidateKeyrec(clientAPI) {
    const control = clientAPI.evaluateTargetPath("#Page:-Current/#Control:KeyRec");
    const keyrecinput = control.getValue();

    // Validate if KeyRec is not empty
    if (!keyrecinput) {
        ShowInlineValidationView(clientAPI, control, "This field is required.");
        return;
    }

    // Validation is successful - Clear validation message
    ShowInlineValidationView(clientAPI, control, "", true);
}
