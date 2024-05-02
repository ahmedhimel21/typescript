{
  // type alias
  // object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  };

  const student: Student = {
    name: "Ahmed",
    age: 21,
    gender: "Male",
    contactNo: "01846343410",
    address: "Mahespur",
  };
  // array
  type Friends = string[];
  const friends: Friends = ["x", "y", "z"];

  // string
  type UserName = string;
  const userName: UserName = "x";

  // boolean
  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  // function
  type Add = (num1: number, num2: number) => number;
  const add : Add = (num1, num2) => num1 + num2;
}
