{
  // spread operator
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["x", "y", "z"];
  const bros: string[] = [...bros1, ...bros2];

  const mentors1 = {
    typeScript: "Mezbaul",
    redux: "Mir",
  };
  const mentors2 = {
    dbms: "Mizan",
    prisma: "Firoz",
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // rest operator
  const greetFriend = (...friends: string[]) => {
    // console.log(`Hi friends ${(f1)} ${f2} ${f3} ${f4}`)
    friends.forEach((friend: string) => console.log(`Hi friend ${friend}`));
  };

  greetFriend("x", "y", "z", "a", "v");
}
