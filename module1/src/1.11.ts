{
  // ternary operator
  const age: number = 18;
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult);

  // nullish coalesing operator
  const isAuthenticated: null | undefined = null;
  const res = isAuthenticated ?? "Guest";
  console.log(res);

  // optional chaining
  type User = {
    id: number;
    name: string;
    address: {
      presentAddress : string;
      permanentAddress: string;
      villageAddress?: string;
    }
  }
  const user : User = {
    id: 1,
    name: "Mr. X",
    address: {
      presentAddress: "Jashore",
      permanentAddress: "Mahespur",
    },
  };

  const villageAddress = user?.address?.villageAddress ?? "Mohammadpur";
  console.log(villageAddress);
}
