{
  // destructuring

  const user = {
    id: 21,
    name: {
      firstName: "Sahabuddin",
      middleName: "Ahmed",
      lastName: "Himel",
    },
    contactNo: "01846343410",
    address: "Mahespur",
  };
  const {
    id,
    name: { firstName, lastName: nickname },
  } = user;
  console.log(firstName, nickname);

  // array destructuring
  const myFriends: string[] = ["x", "y", "z", "a", "b", "c"];
  const [,,bestFriend, ...rest] = myFriends;
  console.log(bestFriend, rest);
}
