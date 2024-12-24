import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery: React.FC<ImageGalleryProps> = ({data, handleModal}) => {
    return (
        <ul className={css.list}>
      {data.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard image={image} handleModal={handleModal} />
        </li>
      ))}
    </ul>
    );
};

export default ImageGallery


