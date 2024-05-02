"use strict";
{
    // function
    // normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    // arrow function
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: "X",
        balance: 0,
        addBalance(balance) {
            return `New balance is ${this.balance + balance}`;
        },
    };
}
