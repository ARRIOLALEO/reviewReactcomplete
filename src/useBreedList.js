import { useEffect, useState } from "react";

const cacheAnimals = {};

const useBreedList = (animal) => {
  console.log(animal);
  const [breeds, setBreeds] = useState([]);
  const [stage, setStage] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (cacheAnimals[animal]) {
      setBreeds(cacheAnimals[animal]);
    } else {
      fetchBreed();
    }
    async function fetchBreed() {
      setBreeds([]);
      setStage("fetching");
      const req = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const data = await req.json();
      const listOfAnimals = data.breeds || [];
      cacheAnimals[animal] = listOfAnimals;
      setStage("loaded");
      setBreeds(cacheAnimals[animal]);
    }
  }, [animal]);
  return [breeds, stage];
};
export { useBreedList };
