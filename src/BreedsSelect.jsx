import React  from "react";
//import { breeds } from "tests/mock/fetch"

export const BreedsSelect = ({breeds, selectBreed, setSelectedBreed}) => {
  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
    console.log(event.target.value);
  };
  return(
    <select value = {selectBreed} onChange = {handleChange}>
      {breeds.map((breed) => (
        <option key = {breed} value = {breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

//export default BreedsSelect
