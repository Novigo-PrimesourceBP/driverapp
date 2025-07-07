/**
 * Opens native maps for navigation to a location using xpos (longitude) and ypos (latitude).
 * Supports both Android and iOS.
 * @param {IClientAPI} clientAPI
 */
export default function OpenMaps(clientAPI) {
    let { city, xpos, ypos } = clientAPI.binding;
    let context = clientAPI.getPageProxy()

// Convert comma to period for proper float parsing
    let longitude = parseFloat(xpos.toString().replace(',', '.'));
    let latitude  = parseFloat(ypos.toString().replace(',', '.'));

// Validate coordinates
if (!latitude || !longitude) {
    console.log("Missing location coordinates (xpos/ypos)");
    alert("Missing location coordinates!!!")
    context.dismissActivityIndicator()
    return 
    }
    // Use proper context reference
    const utilsModule = clientAPI.nativescript.utilsModule;
    const platformModule = clientAPI.nativescript.platformModule;    

    let url = '';
  
    if (platformModule.isIOS) {
        url = `http://maps.apple.com/?daddr=${latitude},${longitude}`;
    } else if (platformModule.isAndroid) {
        url = `http://maps.google.com/maps?daddr=${latitude},${longitude}`;
    } else {
        url = `https://maps.google.com/maps?daddr=${latitude},${longitude}`;
  }

      // Open map
        console.log(`Opening map at: ${url}`);
        utilsModule.openUrl(url);

      // Dismiss activity indicator if shown earlier
      context.dismissActivityIndicator()
  }

