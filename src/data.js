export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);

export const sortAtoZ = (data, order) => {
  if (order === "A-Z") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1);
  } else if (order === "Z-A") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1);
  }
};

export const terrainArray = (array, chosenTerrain) => {
  function terrainFilter(films) {
    let hasChosen = false;
    for (let i = 0; i < films.locations.length; i++) {
      if (films.locations[i].terrain === chosenTerrain) {
        hasChosen = true;
      }
    }
    return hasChosen;
  }
  const arrayFilter = array.filter(terrainFilter);
  return arrayFilter;
};

export const sortChar = (data, order) => {
  if (order === "A-Z") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1);
  } else if (order === "Z-A") {
    // console.log(order);
    return data.sort((a, z) => a.name > z.name ? -1 : 1);
  }
};

export const characters = (films) => {
  const peopleList = [];
  for (let i = 0; i < films.length; i++) {
    for (let j = 0; j < films[i].people.length; j++) {
      const char = films[i].people[j]
      char.movie = films[i].title;
      peopleList.push(char);
    }
  }
  return peopleList;
};

export const computeStats = (chars) => {
  const total = chars.length;
  return total;
};

