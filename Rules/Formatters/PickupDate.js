/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatPickup(context) {
    let dt = context.getBindingObject().pln_dep_dt;
    let ti = context.getBindingObject().pln_dep_ti;
    
    let time = new Date(
        Number(dt.substr(0, 4)),        //year
        Number(dt.substr(4, 2)) - 1,    //Month: ( -1 used since JavaScript months are 0-based)
        Number(dt.substr(6, 2)),        //Day
        Number(ti.substr(0, 2)),        //Hour
        Number(ti.substr(2, 2)),        //Mins
        Number(ti.substr(4, 2)),        //Secs
        0);                             // 0-No additional milliseconds
    let text = context.formatDate(time);
    return `On: ${text}`;
}