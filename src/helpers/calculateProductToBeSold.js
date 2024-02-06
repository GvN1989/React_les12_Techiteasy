import {calculateInitialStock} from "./calculateInitialStock.js";
import {calculateSoldProducts} from "./totalTvSold.js";

export function calculateProductToBeSold (productArray) {

    for (let i = 0; i < productArray.length; i++) {
        const initialStock= calculateInitialStock(productArray);
        const soldProducts = calculateSoldProducts(productArray);
        return initialStock - soldProducts
    }
}