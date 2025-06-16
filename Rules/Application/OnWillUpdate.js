/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/driverapp/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            let close_action = clientAPI.executeAction('/driverapp/Actions/action/Service/CloseOffline.action');
            let close_main = clientAPI.executeAction('/driverapp/Actions/main/Service/CloseOffline.action');
            return Promise.all([close_action, close_main]).then(() => {
                Promise.resolve();
            }).catch((err) => {
                Promise.reject('Offline Odata Close Failed ' + err.message);
            });
        } else {
            return Promise.reject('User Deferred');
        }
    });
}