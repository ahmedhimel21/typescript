{
  // function

  // normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // arrow function
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method
  const poorUser: {
    name: string;
    balance: number;
    addBalance: Function;
  } = {
    name: "X",
    balance: 0,
    addBalance(balance: number): string {
      return `New balance is ${this.balance + balance}`;
    },
  };
}
