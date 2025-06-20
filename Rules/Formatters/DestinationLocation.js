/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function DestionationLocation(clientAPI) {
    let {des_name,des_house_num,des_street,des_city,des_post_code,des_region,des_country} = clientAPI.binding;
    return `${des_name},\n${des_house_num},${des_street},\n${des_city}-${des_post_code},${des_region},${des_country}`;
}
