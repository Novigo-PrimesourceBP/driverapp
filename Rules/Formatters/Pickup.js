/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatPickup(context) {
    let dt = context.getBindingObject().pln_dep_dt;
    let ti = context.getBindingObject().pln_dep_ti;
    // let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)), 0);
    let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)),
        Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
    var text = context.formatDate(time);
    return `On: ${text}`;
}