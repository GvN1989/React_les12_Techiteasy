export function calculateSoldProducts(productArray){
    let total = 0;

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].sold;
    }

    return total;
}

