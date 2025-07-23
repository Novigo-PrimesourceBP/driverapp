/**
 * Formats the value
 * @param {IClientAPI} clientAPI
 */
export default function StopItemValueFormatter(ItemValue) {
        const number = parseFloat(ItemValue);

        // If it's a valid number and greater than 0, return it
        if (!isNaN(number) && number > 0) {
            return number;
        }
        // Otherwise return 0
        return 0;
    }
    
