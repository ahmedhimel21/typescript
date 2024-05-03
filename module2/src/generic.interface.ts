{
  //generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      name: string;
      model: string;
      manufactureYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface TelzealWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<TelzealWatch> = {
    name: "Mr. X",
    computer: {
      name: 'Asus',
      model: "x-512jp",
      manufactureYear: 2020,
    },
    smartWatch: {
      brand: "Telzeal",
      model: "Amoled T2",
      display: "Amoled"
    }
  };

  interface AppleWatch {
    brand: string;
    sleepTrack: boolean;
  };
  interface YamahaBike {
    brand: string;
    engine: string;
    abs: boolean
  }

  const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: "Mr. X",
    computer: {
      name: "Apple",
      model: "Mac Book pro",
      manufactureYear: 2022,
    },
    smartWatch: {
      brand: "Apple watch",
      sleepTrack: true,
    },
    bike: {
      brand: "Yamaha",
      engine: "160cc",
      abs: true,
    }
  }
}
