/**
 * Displays the first activity date and time
 * @param {IClientAPI} clientAPI
 */
export default function FirstActivityDatetime(context) {
    let bindingObject = context.getBindingObject();
    let firstActDate = null;
    let firstActTime = null;

    // Check if aggr_start_dt is initialized
    if (bindingObject.aggr_start_dt) {
        firstActDate = bindingObject.aggr_start_dt;
        firstActTime = bindingObject.aggr_start_ti;
    }
    // Check if fin_start_dt is initialized (only if the first one isn't)
    else if (bindingObject.fin_start_dt) {
        firstActDate = bindingObject.fin_start_dt;
        firstActTime = bindingObject.fin_start_ti;
    }
    // Check if pln_dep_dt is initialized (only if the previous ones aren't)
    else if (bindingObject.pln_dep_dt) {
        firstActDate = bindingObject.pln_dep_dt;
        firstActTime = bindingObject.pln_dep_ti;
    }

    // If a valid date and time are found, format and return it
    if (firstActDate && firstActTime) {
        let dateTime = new Date(
            Number(firstActDate.substr(0, 4)),
            Number(firstActDate.substr(4, 2)) - 1,
            Number(firstActDate.substr(6, 2)),
            Number(firstActTime.substr(0, 2)),
            Number(firstActTime.substr(2, 2)),
            Number(firstActTime.substr(4, 2)),
            0
        );
        return `On: ${context.formatDatetime(dateTime)}`;
    }

    // Return blank if no date is available
    return ""; 
}
