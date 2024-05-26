import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
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
  return <></>
}

export default DogListContainer
