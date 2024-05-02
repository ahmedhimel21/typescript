"use strict";
{
    // spread operator
    const bros1 = ["a", "b", "c"];
    const bros2 = ["x", "y", "z"];
    const bros = [...bros1, ...bros2];
    const mentors1 = {
        typeScript: "Mezbaul",
        redux: "Mir",
    };
    const mentors2 = {
        dbms: "Mizan",
        prisma: "Firoz",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // rest operator
    const greetFriend = (...friends) => {
        // console.log(`Hi friends ${(f1)} ${f2} ${f3} ${f4}`)
        friends.forEach((friend) => console.log(`Hi friend ${friend}`));
    };
    greetFriend("x", "y", "z", "a", "v");
}
