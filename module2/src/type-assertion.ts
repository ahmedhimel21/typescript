{
  // type assertion --> means developer can better understand type rather than typescript
  // example-1:
  let anything: any;
  anything = "Level 2";
  anything = 222;
  (anything as number)
  console.log(anything);

  // example-2:
  const kgToGm = (value : number | string) : string | number | undefined => {
    if(typeof value === 'string'){
      const convertedNumber = parseFloat(value) * 1000;
      return `The converted number is ${convertedNumber} gm`;
    }
    if(typeof value === 'number'){
      return value * 1000;
    }
  }
  const res1 = kgToGm('1') as string;
  const res2 = kgToGm(1) as number;
  console.log(res2);

  // example-3:
  type CustomType = {
    message: string;
  }

  try{

  }catch(error){
    console.log((error as CustomType).message);
  }

}
