"use strict";
{
    // nullable type
    const search = (value) => {
        const isSearching = value ? "Searching" : "There is nothing to search";
        console.log(isSearching);
    };
    search(null);
    // unknown type
    const speedInMeterPerSec = (value) => {
        if (typeof value === "number") {
            const speedConvert = (value * 1000) / 3600;
            console.log(`Speed is ${speedConvert} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [number, unit] = value.split(' ');
            const speedConvert = (parseFloat(number) * 1000) / 3600;
            console.log(`Speed is ${speedConvert} ms^-1`);
        }
        else {
            console.log('Wrong input');
        }
    };
    speedInMeterPerSec(null);
}
