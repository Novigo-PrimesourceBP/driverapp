/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatReturn(context) {
    let dt = context.getBindingObject().pln_arr_dt;
    let ti = context.getBindingObject().pln_arr_ti;
    let time = new Date(
        Number(dt.substr(0, 4)),
        Number(dt.substr(4, 2)) - 1,
        Number(dt.substr(6, 2)),
        Number(ti.substr(0, 2)),
        Number(ti.substr(2, 2)),
        Number(ti.substr(4, 2)),
        0);
    var text = context.formatDatetime(time);
    return text;
}