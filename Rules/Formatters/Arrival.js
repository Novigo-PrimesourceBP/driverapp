/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Arrival(clientAPI) {
    let dt = clientAPI.binding.pln_arr_dt;
    let ti = clientAPI.binding.pln_arr_ti;
    let time = new Date(Number(dt.substr(0, 4)), Number(dt.substr(4, 2)) - 1, Number(dt.substr(6, 2)),
        Number(ti.substr(0, 2)), Number(ti.substr(2, 2)), Number(ti.substr(4, 2)), 0);
    var text = clientAPI.formatDatetime(time);
    if(!dt || !ti)
        return 'Arrival : TBD'
    return `Arrival : ${text}`;
}
