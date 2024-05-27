import React from 'react'

// @ts-check
export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <select value={selectedBreed} onChange={onChange}>
      {Object.keys(breeds).map(breed => (
        <option value={breed} key={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect