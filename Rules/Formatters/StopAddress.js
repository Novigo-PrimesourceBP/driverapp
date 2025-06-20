/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function StopAddress(clientAPI) {
    let {name,house_num,street,city,post_code,region,country} = clientAPI.binding;
    return `${name},\n${house_num},${street},\n${city}-${post_code},${region},${country}`;
}
