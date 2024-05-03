{
  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");
  console.log(res1);

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<boolean>(true);
  console.log(res2);

  interface User {
    name: string;
    age: number;
    isSingle: boolean;
  }
  const res3 = createArrayWithGeneric<User>({
    name: "X",
    age: 25,
    isSingle: false,
  });

  // tuple
  const createArrayWithTuple = <T , Q>(p1: T, p2: Q) : [T , Q] =>{
    return [p1, p2];
  };
  const res4 = createArrayWithTuple<number, string>(222, "BD");
  console.log(res4);
  const res5 = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: "South Asia"});
  console.log(res5);
  
}
