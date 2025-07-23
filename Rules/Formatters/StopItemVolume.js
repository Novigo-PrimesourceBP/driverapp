/**
 * Formats the Stop Item Volume value 
 * Returns value only when:
*  - There is a real (non-zero) value
*  - The unit is present
 * @param {IClientAPI} clientAPI
 */
import StopItemValueFormatter from './StopItemValueFormatter';

export default function StopItemVolume(clientAPI) {
    let rawVal = clientAPI.binding.gro_vol_val;
    let unit = clientAPI.binding.gro_vol_uni;
    let val = StopItemValueFormatter(rawVal);

    // alert(`gro_vol_val: ${rawVal}\nunit: ${unit}\nparsed value: ${val}`);

    return val > 0 && unit && unit.trim() !== "" ? `${val} ${unit.trim()}` : "";
}
