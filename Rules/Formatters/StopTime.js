/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function StopTime(clientAPI) {
    var text_arr, text_dep
    try {
        let dt_arr = clientAPI.binding.pln_arr_dt;
        let ti_arr = clientAPI.binding.pln_arr_ti;
        if (!dt_arr || !ti_arr) {
            text_arr = 'TBD'
        }
        else {
            let time_arr = new Date(Number(dt_arr.substr(0, 4)), Number(dt_arr.substr(4, 2)) - 1, Number(dt_arr.substr(6, 2)),
                Number(ti_arr.substr(0, 2)), Number(ti_arr.substr(2, 2)), Number(ti_arr.substr(4, 2)), 0);
            text_arr = clientAPI.formatDatetime(time_arr);
        }



        let dt_dep = clientAPI.binding.pln_dep_dt;
        let ti_dep = clientAPI.binding.pln_dep_ti;


        if (!dt_dep || !ti_dep) {
            text_dep = 'TBD'
        }
        else {
            let time_dep = new Date(Number(dt_dep.substr(0, 4)), Number(dt_dep.substr(4, 2)) - 1, Number(dt_dep.substr(6, 2)),
                Number(ti_dep.substr(0, 2)), Number(ti_dep.substr(2, 2)), Number(ti_dep.substr(4, 2)), 0);
            text_dep = clientAPI.formatDatetime(time_dep);
        }
        return `${text_arr} - ${text_dep}`
    } catch (error) {
        return `Error`
    }

}
