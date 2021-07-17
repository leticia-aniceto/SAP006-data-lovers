import { filters, terrainArray,computeStats, characters } from '../src/data';

const mockChars = [
  {
    "name": "Pazu",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Lusheeta Toel Ul Laputa",
    "gender": "Female",
    "specie": "Human"
  },
  {
    "name": "Kiki",
    "gender": "Female",
    "specie": "Witch"
  },
  {
    "name": "Jiji",
    "gender": "Male",
    "specie": "Cat"
  }
]

const mockFilms = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
    "locations": [
      {
        "name": "Gondoa",
        "terrain": "TODO",
      },
      {
        "name": "Pazu's Mines",
        "terrain": "Hill",
      },
      {
        "name": "Laputa",
        "terrain": "City",
      },
      {
        "name": "Tedis",
        "terrain": "Hill",
      }
    ]
  },
  {
    "title": "Kiki Delivery Service",
    "director": "Mirabel Miyazaki",
    "release_date": "1989",
    "rt_score": "96",
    "locations": [
      {
        "name": "Ursula's Log Cabin",
        "terrain": "TODO",
      },
      {
        "name": "Koriko",
        "terrain": "Hill",
      },
      {
        "name": "Karikiya",
        "terrain": "City",
      },
      {
        "name": "Guchokipanya",
        "terrain": "Hill",
      }
    ]
  }
]

// release date
describe("release date to be equal...", () => {

  it('should be a function', () => {
    expect(typeof filters).toBe('function');
  });

  it('should return movies by release date', () => {
    expect(filters(mockFilms, "release_date", "1986")).toEqual([mockFilms[0]]);
  });
});

//director
describe("director to be equal ...", () => {

  it('should be a function', () => {
    expect(typeof filters).toBe('function');
  });

  it('should return with movie "Castle in the Sky" for director "Mirabel Miyazaki"', () => {
    expect(filters(mockFilms, "director", "Mirabel Miyazaki")).toStrictEqual([mockFilms[1]]);
  });
});

//rating
describe("rating should be equal...", () => {

  it('should be a function', () => {
    expect(typeof filters).toBe('function');
  });

  it('should return with movie "Kiki Delivery Service" for rating "96"', () => {
    expect(filters(mockFilms, "rt_score", "96")).toEqual([mockFilms[1]]);
  });
});

//sortAZ
// describe("sort movies A to Z to be equal...", () => {

// // const AZ = (a, z) => a.title > z.title ? 1 : -1;
// // const ZA = (a, z) => a.title > z.title ? -1 : 1;

//   it('should be a function', () => {
//     expect(typeof sortAtoZ).toBe('function');
//   });

//   it('should return name of movies sorted by alphabetical order', () => {
//     expect(sortAtoZ(mockFilms, "A-Z")).toStrictEqual([{"title": "Castle in the Sky"}, {"title": "Kiki's Delivery Service"}]);
//   });

//   it('should return name of movies sorted by decrescent alphabetical order', () => {
//     expect(sortAtoZ(mockFilms, "Z-A")).toStrictEqual([{"title": "Kiki's Delivery Service"}, {"title": "Castle in the Sky"}]);
//   });
// });

//terrainArray
describe("terrain array should be equal...", () => {

  it('should be a function', () => {
    expect(typeof terrainArray).toBe('function');
  });

  it('should return "Castle in the Sky" and "Kiki Delivery Service" for "City" as selected terrain', () => {
    expect(terrainArray(["Castle in the Sky", "Kiki Delivery Service"], "City")).toEqual([mockFilms[0], mockFilms[1]]);
  });
});

//cálculos
describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('se forneço array de 5, retorna o length de 5', () => {
    expect(computeStats(["chihiro", "noface", "totoro", "kiki", "howl"])).toBe(5);
  });
});

//characters - peopleList
describe('characters', () => {
  it('is a function', () => {
    expect(typeof characters).toBe('function');
  });

  it('return 4 for characters length', () => {
    expect(characters(mockChars)).toHaveLength(4);
  });
});

//characters - sortChar
// describe('sortChar', () => {
//   it('is a function', () => {
//     expect(typeof sortChar).toBe('function');
//   });

//   it('is working for A to Z', () => {
//     expect(sortChar(typeOf, array)).toStrictEqual();
//   })
// });