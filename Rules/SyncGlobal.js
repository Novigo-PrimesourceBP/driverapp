/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SyncGlobal(context) {
    let _action = context.executeAction('/driverapp/Actions/action/Service/SyncStartedMessage.action');
    let _main = context.executeAction('/driverapp/Actions/main/Service/SyncStartedMessage.action');

    //You can add more service initialize actions here

    return Promise.all([_action, _main]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/driverapp/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Sync completed",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}
