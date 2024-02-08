import { useState } from "react";

const images = [
  "images/img-1.jpg",
  "images/img-2.jpg",
  "images/img-3.jpg",
  "images/img-4.jpg",
];

export default function App() {
  const [currentImg, setCurentImg] = useState(0);

  function prevBtn() {
    setCurentImg(currentImg < 1 ? images.length - 1 : currentImg - 1);
  }

  function nextBtn() {
    setCurentImg(currentImg > images.length - 2 ? 0 : currentImg + 1);
  }

  return (
    <div>
      <h1>Carousel</h1>
      <button className="left" onClick={prevBtn}>
        &larr;
      </button>

      {images.map(
        (img, i) =>
          currentImg === i && (
            <div className="imgContainer" key={img}>
              <img src={img} alt="nature-img" />
            </div>
          )
      )}

      <button className="right" onClick={nextBtn}>
        &rarr;
      </button>
    </div>
  );
}
