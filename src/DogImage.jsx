
export const DogImage = (props) => {
  console.log(props.url)
  return(
    <div>
      <img src = {props.imageUrl} alt="いっぬ"/>
    </div>
  )
}

//export default DogImage
