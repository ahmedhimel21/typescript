"use strict";
{
    // reference type --> object
    const user = {
        company: "Programming Hero",
        firstName: "Sahabuddin",
        lastName: "Himel",
        age: 21,
        isSingle: true,
        salaryIncrease() {
            return this.age + 500;
        },
    };
}
