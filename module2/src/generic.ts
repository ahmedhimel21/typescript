{
  //array generic
  type GenericArray<T> = Array<T>;
  const oddNumbers: Array<number> = [1, 3, 5, 7, 9]; //simple version
  const numbers: GenericArray<number> = [1, 3, 5, 7];
  const friends: GenericArray<string> = ["X", "y", "z"];
  const bool: GenericArray<boolean> = [true, false, true];

  // array of object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mr. X",
      age: 100,
    },
    {
      age: 110,
      name: "Mr. Y",
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    222,
    {
      name: "Mr. Rahim",
      email: "rahim@gmail.com",
    },
  ];
}
