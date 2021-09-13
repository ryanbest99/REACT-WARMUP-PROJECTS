import React from "react";
import Image from "./Image";

const ImageList = ({ images }) => {
  const results = images.map((image) => {
    return <Image key={image.id} url={image.urls.small} />;
  });

  return (
    <div>
      <h1>ImagesList</h1>
      {results}
    </div>
  );
};

export default ImageList;
