/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function NavigateToImagePage(context) {
    const pageProxy = context.getPageProxy();
    const binding = pageProxy.getActionBinding();

    // Step 1: Show the incoming binding
    alert("🔍 Step 1: Binding received:\n" + JSON.stringify(binding));

    // Step 2: Check required fields
    if (!binding.tor_id || !binding.doc_key) {
        alert("❌ Missing tor_id or doc_key in binding. Aborting.");
        return;
    }

    // Optional: Build complete binding if needed
    const completeBinding = {
        tor_id: binding.tor_id,
        doc_key: binding.doc_key,
        Keyrec: '',
        DelvNumber: '',
        Recipient: '',
        name: '',
        alternative_name: binding.alternative_name || '',
        description: '',
        filesize_content: '',
        folder: ''
    };

    alert("✅ Step 2: Complete binding prepared:\n" + JSON.stringify(completeBinding));

    // Step 3: Set the action binding
    pageProxy.setActionBinding(completeBinding);
    alert("✅ Step 3: Binding set. Now navigating...");

    // Step 4: Navigate using pre-defined action
    return pageProxy.executeAction("/driverapp/Actions/Navigation/To_AttachmentDetail.action")
        .then(() => {
            alert("✅ Step 4: Navigation triggered successfully.");
        })
        .catch(error => {
            alert("❌ Error during navigation:\n" + error);
        });
}
