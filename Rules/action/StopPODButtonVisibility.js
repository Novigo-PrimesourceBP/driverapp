/**
 * Hide POD button based on Stop Sequence
 * @param {IClientAPI} clientAPI
 */
export default function StopPODButtonVisibility(clientAPI) {
    // Hide button if stopseq is 'L' (Last)
    if (clientAPI.binding.seqpos === 'L') {
        return false;
    } else {
        // Otherwise, show the button
        return true;
    }
}