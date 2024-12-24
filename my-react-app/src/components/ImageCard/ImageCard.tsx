import React from "react";
import css from "./ImageCard.module.css";




const ImageCard: React.FC<ImageCardProps> = ({ image, handleModal }) => {
    return (
      <div>
        <img
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description || "Image"}
          onClick={() => handleModal(image)}
        />
      </div>
    );
  };
  
  export default ImageCard;