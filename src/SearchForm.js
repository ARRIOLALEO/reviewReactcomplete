import { useEffect, useState } from "react";
import { DisplayPets } from "./DisplayPets";
import { useBreedList } from "./useBreedList";
const ANIMALS = ["dog", "cat", "rat", "reptile"];
const BREED = [];
const Searchform = () => {
  const [location, setLocation] = useState("");
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState("");
  const [breeds, status] = useBreedList(animal);
  const [breed, setBreed] = useState("");
  useEffect(() => {
    callToAPI();
  }, []);
  async function callToAPI() {
    const req = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`
    );
    console.log(breed, animal);
    const data = await req.json();
    setAnimals(data.pets);
    console.log(data.pets);
  }
  return (
    <>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callToAPI();
          }}
        >
          <label htmlFor="location">
            Location
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="animals">
            Animals
            <select
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              onBlur={(e) => setAnimal(e.target.value)}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breeds">
            Breeds
            <select
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setBreed(e.target.value)}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <DisplayPets animals={animals} />
    </>
  );
};

export default Searchform;
