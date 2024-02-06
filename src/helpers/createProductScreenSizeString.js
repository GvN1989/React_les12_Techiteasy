import {bestSellingTv} from "../constants/inventory.js";

export function createProductScreenSizeString(sizeArray){
    let output= "";

    for (let i = 0; i < sizeArray.length; i++) {
        const sizeInch = sizeArray[i];
        const sizeCM = Math.round( sizeArray[i] * 2.54);

        output = output + `${sizeInch} inch ${sizeCM} cm`;

        if (i<sizeArray.length-1) {
            output=`${output} | `;
        }
    }
    return output
}