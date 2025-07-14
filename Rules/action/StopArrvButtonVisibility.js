/**
 * Hide Arrival and Departure buttons on page load
 * @param {IClientAPI} clientAPI
 */
export default function StopArrvButtonVisibility(clientAPI) {
    // Hide button if stopseq is 'F' (First)
    if (clientAPI.binding.seqpos === 'F') {
        return false;
    } else {
        // Otherwise, show the button
        return true;
    }
}