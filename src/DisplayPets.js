import { Pet } from "./Pet";
export function DisplayPets({ animals }) {
  return animals.map((animal) => <Pet {...animal} />);
}
