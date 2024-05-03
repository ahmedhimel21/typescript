{
  //
  // interface vs type alias
  type User = {
    name: string;
    age: number;
  };
  interface User1 {
    name: string;
    age: number;
  }

  // extends property
  type UserWithRole = User & {
    role: string;
  };
  interface UserWithRole1 extends User1 {
    role: string;
  }

  const user: UserWithRole1 = {
    name: "Mr. x",
    age: 50,
    role: "Admin",
  };

  // array
  type Friends = string[];
  const friends: Friends = ["X", "Y", "Z"];

  interface Numbers {
    [index: number]: number;
  }
  const numbers: Numbers = [1, 3, 5, 7, 8];

  // function
  type Add = (x: number, y: number) => number;
  const add: Add1 = (x, y) => x + y;

  interface Add1 {
    (x: number, y: number): number;
  }
  //
}
