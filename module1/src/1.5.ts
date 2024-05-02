{
  // reference type --> object

  const user: {
    company: "Programming Hero"; //literal types
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    age: number;
    isSingle: boolean;
    salaryIncrease: Function;
  } = {
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
