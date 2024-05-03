{
  // generic constraints with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = keyof Vehicle;

  const hasVehicle: Owner = "car";

  const getPropertyName = <T,Y extends keyof T>(obj : T, key :Y) =>{
    return obj[key];
  }
  const car = {
    model: "BMW",
    year: 2017,
  };

  const res = getPropertyName(car, "model");
  console.log(res);
}
