const images = ["images/img-1.jpg",
"images/img-2.jpg","images/img-3.jpg","images/img-4.jpg"];

export default function App(){
  return (
    <div>
      <h1>Carousel</h1>
      <button className="left">&larr;</button>
      <div className="imgContainer">
      <img src={images[3]} alt="nature"/>
      </div>
      <button className="right">&rarr;</button>
    </div>
  )
}

