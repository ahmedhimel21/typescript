"use strict";
var _a, _b;
{
    // ternary operator
    const age = 18;
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log(isAdult);
    // nullish coalesing operator
    const isAuthenticated = null;
    const res = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log(res);
    const user = {
        id: 1,
        name: "Mr. X",
        address: {
            presentAddress: "Jashore",
            permanentAddress: "Mahespur",
        },
    };
    const villageAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.villageAddress) !== null && _b !== void 0 ? _b : "Mohammadpur";
    console.log(villageAddress);
}
