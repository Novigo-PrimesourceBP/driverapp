/**
 * @param {IClientAPI} context
 */
// import { isAndroid, isIOS } from "@nativescript/core/platform";

// let geolocation;
// if (isAndroid || isIOS) {
//     geolocation = require("@nativescript/geolocation");
// }

export default function GetCoordinates(context) {
    // const logger = context.getLogger();

    // if (isAndroid || isIOS) {
    //     geolocation.isEnabled().then((enabled) => {
    //         if (!enabled) {
    //             geolocation.enableLocationRequest().then(() => {
    //                 fetchNativeLocation();
    //             }).catch((err) => {
    //                 alert("Location request failed: " + err.message);
    //                 logger.log(err.message, 'ERROR');
    //             });
    //         } else {
    //             fetchNativeLocation();
    //         }
    //     }).catch((err) => {
    //         alert("Geolocation check failed: " + err.message);
    //         logger.log(err.message, 'ERROR');
    //     });

    //     function fetchNativeLocation() {
    //         geolocation.getCurrentLocation({
    //             desiredAccuracy: 3,
    //             updateDistance: 5,
    //             timeout: 11000
    //         }).then((loc) => {
    //             if (loc) {
    //                 const msg = `Latitude: ${loc.latitude}, Longitude: ${loc.longitude}`;
    //                 alert(msg);
    //                 logger.log(msg, 'INFO');
    //             }
    //         }).catch((err) => {
    //             alert("Failed to get native location: " + err.message);
    //             logger.log(err.message, 'ERROR');
    //         });
    //     }
    // } else if (typeof navigator !== 'undefined' && navigator.geolocation) {
    //     // Web platform
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             const msg = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    //             alert(msg);
    //             logger.log(msg, 'INFO');
    //         },
    //         (error) => {
    //             alert("Failed to get web location: " + error.message);
    //             logger.log(error.message, 'ERROR');
    //         },
    //         { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
    //     );
    // } else {
    //     const msg = "Geolocation not supported.";
    //     alert(msg);
    //     logger.log(msg, 'WARN');
    // }
}
