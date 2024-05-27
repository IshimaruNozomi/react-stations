import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'
import './App.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({})
  const [selectedBreed, setSelectedBreed] = useState('')
  const [pictureBreed, setPictureBreed] = useState([])

  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all')
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const dogData = await res.json()
        setBreeds(dogData.message)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }
    fetchBreeds()
  }, [])

  const fetchImages = async () => {
    if (selectedBreed) {
      try {
        const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/21`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPictureBreed(data.message)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    } else {
      console.warn('No breed selected')
    }
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleSelectChange}
      />
      <button onClick={fetchImages}>表示</button>
      <div className="dog-list-container">
        {pictureBreed.length > 0 ? (
          pictureBreed.map((url, key) => (
            <div className="dog-image-wrapper" key={key}>
              <DogImage url={url} />
            </div>
          ))
        ) : (
          <p>No images to display</p>
        )}
      </div>
    </>
  )
}

export default DogListContainer

