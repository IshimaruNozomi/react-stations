import { useState, useEffect } from 'react'
import {BreedsSelect} from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectBreed, setSelectBreed] = useState('')
  const breeds_list_url = 'https://dog.ceo/api/breeds/list/all'

  useEffect(() => {
    fetch(breeds_list_url)
      .then(Response => Response.json())
      .then(dogs => {
        const array = []
        for (let i in dogs.message)
          array.push(i)
        setBreeds(array)
        console.log(breeds)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  },[])

const handleSelectChange = (selectedBreed) => {
  selectBreed(selectBreed)
}

  return(
    <div>
      <BreedsSelect
        breeds = {breeds}
        selectBreed = {selectBreed}
        setSelectBreed = {handleSelectChange}
        />
    </div>
  )
}

export default DogListContainer
