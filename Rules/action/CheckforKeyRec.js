/**
 * Check if KeyRec is mandatory based on Party ID related to delivery
 * @param {IClientAPI} clientAPI
 */
export default function CheckforKeyRec(clientAPI) {
    const context = clientAPI.getPageProxy();
    
    let delivery_seld = context.evaluateTargetPath("#Control:Delivery/#SelectedValue");

    if (!delivery_seld) {
        return Promise.resolve(false); // No delivery selected, so KeyRec not mandatory
    }
    const service = "/driverapp/Services/main.service";
    const entitySet = "ZTM_I_DDL_DA_FUIT";
    const filter = `$filter=base_btd_id eq '${delivery_seld}' and party_rco eq 'RG'`;
    
    return clientAPI.read( service, entitySet, [], filter, {}, {})
        .then(result => {            
            if (result.length > 0) {                
                return true; 
            } else {                
                return false;
            }
        })
        .catch(error => {
            alert("OData read failed: " + (error.message || error));
            return false;
        });
    }  