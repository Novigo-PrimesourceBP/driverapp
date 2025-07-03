/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SourceLocation(clientAPI) {
    let {src_name,src_house_num,src_street,src_city,src_post_code,src_region,src_country} = clientAPI.binding;
    return `${src_name},\n${src_house_num},${src_street},\n${src_city}-${src_post_code},${src_region},${src_country}`;
}
