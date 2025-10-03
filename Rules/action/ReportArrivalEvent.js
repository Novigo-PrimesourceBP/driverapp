/**
 * This function report Arrival event/attach sign
 * Proprietary Notice:
--The Driver App is proprietary to ArchLynk.
--Customer is granted a limited, non-transferable license to use this App only 
--within their internal environment during the engagement.
--Any modification voids ArchLynk’s support obligations.
--Disclosure, redistribution, or removal of ArchLynk branding is strictly prohibited.
--Unauthorized use may result in legal action.
 * @param {IClientAPI} clientAPI
 */
import { Connectivity } from '@nativescript/core'

export default async function ReportArrivalEvent(clientAPI) {
    let { tor_id, locid, } = clientAPI.binding;//Get bindings from page
    let context = clientAPI.getPageProxy();
    //Get platform and Connectivity type
    const platformModule = clientAPI.nativescript.platformModule;
    const connectionType = Connectivity.getConnectionType();

    //Check if IOS and offline - Throw error message and close the Page
    if (platformModule.isIOS && connectionType === Connectivity.connectionType.none) {        
        return context.executeAction({
            Name: "/driverapp/Actions/action/Service/ShowMessage.action",
            Properties: {
                Title: "Network Error",
                Message: "No network Connectivity.Try posting when online"
            }
        });        
    }
    //Get Signature Value
    let signature = context.evaluateTargetPath("#Control:SignatureArrv/#Value")

    //Step 1 : Validate Signature
    if (!signature) {
        alert("Signature required!!!")
        context.dismissActivityIndicator()
        return
    }
    // Show initial indicator only before async calls
    context.showActivityIndicator("Reporting Event...");

    // Step 2: Set action binding for ReportEvent & Signature upload
    context.setActionBinding({
        tor_id: tor_id,
        event_code: 'ARRIV_DEST',
        event_reason: '',
        ext_loc_id: locid,
        event_time: '' + new Date().getTime(),
    });

    const slug = {
        tor_id: tor_id,
        description: locid + "_Driver_Sign",
        attachment_type: 'ZSIG',
        alternative_name: 'Arrival-Signature',
        folder: locid,
        delv_number: '',
        keyrec: '',
        recipient: ''
    };
    //Android 
    if (platformModule.isAndroid) {
        //Get Content & content type
        const media = context.evaluateTargetPath("#Page:ArrivalEvent/#Control:SignatureArrv/#Value");
        // Step 3: Report event
        return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(async () => {
            context.dismissActivityIndicator()
            context.showActivityIndicator("Uploading signature");
            return context.executeAction({
                Name: "/driverapp/Actions/attachmentdwld/Attachment/CreateSign.action",
                Properties: {
                    Headers: { Slug: encodeURI(JSON.stringify(slug)) },
                    Media: [media]
                }
            }).then(() => {
                context.dismissActivityIndicator()
                return context.executeAction({
                    Name: "/driverapp/Actions/action/Service/ShowMessage.action",
                    Properties: {
                        Title: "Success",
                        Message: `Event reported and signature uploaded for ${locid}. Please refresh the app.`
                    }
                });
            }).catch((err) => {
                context.dismissActivityIndicator()
                return context.executeAction({
                    Name: "/driverapp/Actions/action/Service/ShowMessage.action",
                    Properties: {
                        Title: "Error",
                        Message: `Failed to upload ${err}`
                    }
                });
            });
        }).catch((err) => {
            context.dismissActivityIndicator()
            return context.executeAction({
                Name: "/driverapp/Actions/action/Service/ShowMessage.action",
                Properties: {
                    Title: "Error",
                    Message: `Failed to report event ${err}`
                }
            });
        }).finally(() => {
            context.dismissActivityIndicator();
        })
    }
    //IOS 
    if (platformModule.isIOS) {
        //Step 1: Fetch CSRF Token
        let token;
        let targetUrl = `/action/AttachmentSet`;
        try {
            let response = await context.sendRequest(`/action`, {
                "method": "GET",
                'header': {
                    "x-csrf-token": "fetch",
                }
            });
            token = response.headers["x-csrf-token"] || response.headers.get("x-csrf-token");
            if (!token) throw new Error("CSRF token missing");
        } catch (err) {
            context.dismissActivityIndicator();
            alert(`CSRF fetch failed: ${err.message || err}`);
            return;
        }
        // Step 3: Report event
        return context.executeAction("/driverapp/Actions/action/Service/ReportEvent.action").then(() => {
            context.dismissActivityIndicator()
            context.showActivityIndicator("Uploading signature");
            return context.sendRequest(targetUrl, {
                "method": "POST",
                'header': {
                    "Content-Type": signature.contentType,
                    "x-csrf-token": token,
                    "Slug": encodeURI(JSON.stringify(slug))
                },
                "body": signature.content
            }).then(() => {
                context.dismissActivityIndicator()
                // alert(`Event reported and signature uploaded for ${locid}. Please refresh the app.`)   
                return context.executeAction({
                    Name: "/driverapp/Actions/action/Service/ShowMessage.action",
                    Properties: {
                        Title: "Success",
                        Message: `Event reported and signature uploaded for ${locid}. Please refresh the app.`
                    }
                });
            }).catch((err) => {
                context.dismissActivityIndicator()
                // alert(`Failed to upload ${err}`)
                return context.executeAction({
                    Name: "/driverapp/Actions/action/Service/ShowMessage.action",
                    Properties: {
                        Title: "Error",
                        Message: `Failed to upload ${err}`
                    }
                });
            });
        }).catch((err) => {
            context.dismissActivityIndicator()
            // alert(`Failed to report event ${err}`)
            return context.executeAction({
                Name: "/driverapp/Actions/action/Service/ShowMessage.action",
                Properties: {
                    Title: "Error",
                    Message: `Failed to report event ${err}`
                }
            });
        }).finally(() => {
            context.dismissActivityIndicator();
            // return context.executeAction("/driverapp/Actions/ClosePage.action")
        })

    }
}