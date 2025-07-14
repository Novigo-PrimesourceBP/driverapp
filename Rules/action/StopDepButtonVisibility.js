/**
 * Hide the Departure buttons based on Stop Sequence
 * @param {IClientAPI} clientAPI
 */
export default function StopDepButtonVisibility(clientAPI) {
    // Hide button if stopseq is 'L' (Last)
    if (clientAPI.binding.seqpos === 'L') {
        return false;
    } else {
        // Otherwise, show the button
        return true;
    }
}