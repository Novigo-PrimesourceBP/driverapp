export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _action = context.executeAction('/driverapp/Actions/action/Service/InitializeOffline.action');
    let _main = context.executeAction('/driverapp/Actions/main/Service/InitializeOffline.action');
    let _attchdwld = context.executeAction('/driverapp/Actions/attachmentdwld/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_action, _main, _attchdwld]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/driverapp/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
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