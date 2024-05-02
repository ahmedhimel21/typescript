{
  // union types
  type FrontendDev = 'Fakibaz' | 'JuniorDev';
  type FullStackDev = 'FrontendDev' | 'BackendDev';
  type Developer = FrontendDev | FullStackDev;

  const developer : Developer = 'JuniorDev';
  console.log(developer);

  // intersection types &
  // type FrontendDev = {
  //   skills: string[];
  //   designation1: "FrontendDev";
  // };
  // type BackendDev = {
  //   skills: string[];
  //   designation2: "BackendDev";
  // };
  // type FullStackDev = FrontendDev & BackendDev;

  // const fullStackDev : FullStackDev = {
  //   skills: ["HTML", "CSS", "Express"],
  //   designation1: "FrontendDev",
  //   designation2: "BackendDev"
  // };
  // console.log(fullStackDev);
}