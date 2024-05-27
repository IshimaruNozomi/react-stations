import React, { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/stbernard/n02109525_10908.jpg',
  )

  const change = async () => {
    try {
      const data = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!data.ok) {
        throw new Error('Network response was not ok')
      }
      const img = await data.json()
      return img.message
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
      return dogUrl
    }
  }

  const ChangeClick = async () => {
    const imageUrl = await change()
    setDogUrl(imageUrl)
  }

  return (
    <>
      <div className="allthing">
        <p>犬の画像を表示するサイト！</p>
        <button onClick={ChangeClick}>更新</button>
        <DogImage url={dogUrl} />
      </div>
    </>
  )
}

export default Description
