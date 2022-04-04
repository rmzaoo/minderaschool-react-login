import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
  let images: any = [];

  for (let i = 0; i < 250; i++) {
    images.push(
      <LazyLoadImage
        key={i}
        src={`https://picsum.photos/2000/1200?random=${i}`}
        width="500px"
        height="300px"
        alt="random img"
        effect="blur"
      ></LazyLoadImage>
    );
  }
  return <div>{images}</div>;
};

export default Gallery;
