import React, { useState, useEffect } from 'react';
import { DogImage } from "./DogImage"

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  async function APIurl(){
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error('Failed to fetch dog image');
      }
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }

  return(
    <>
    <p>犬の画像を表示するサイトです</p>
    <DogImage url = {dogUrl} />
    <button onClick={APIurl}>更新</button>
    </>
  )
}

export default Description
