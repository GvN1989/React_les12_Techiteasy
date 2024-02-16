import {inventory} from "./inventory.js";

// opdracht 1a

const productTypes= inventory.map ((tv) => {
    return tv.type;
});

console.log(productTypes);

// opdracht 1b

const productSoldOut= inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
});

console.log(productSoldOut);

//opdracht 1c

const specificProduct = inventory.find((tv) => {
    return tv.type === "NH3216SMART"
})

console.log(specificProduct);

//opdracht 1d

const sportWatchArray = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        return { name: `${tv.brand} ${tv.name}`, suitable: true}
        }
    else
        return {name: `${tv.brand} ${tv.name}`, suitable: false}
})

console.log(sportWatchArray);

//opdracht 1e

const bigTvArray = inventory.filter((tv) => {
    return tv.availableSizes.find((size) => {
        return size >= 65
    })
});

console.log(bigTvArray);

//opdracht 1f

const ambilightSpec = inventory.filter ((tv) => {
    const optionAmbilight = tv.options.find((option) => {
        return option.name === "ambiLight"
    });

    if(optionAmbilight.applicable === true) {
        return true;
    }

    }
)

console.log(ambilightSpec);