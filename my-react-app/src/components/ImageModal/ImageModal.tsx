import React from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal"


const ImageModal: React.FC<ImageModalProps> = ({isOpen, selectedImage, onRequestClose,}) => {
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Image Modal"
          style={{
            content: {
              maxWidth: "600px",
              margin: "auto",
              padding: "20px",
              height: "fit-content",
            },
          }}
        >
            {selectedImage ? ( 
                <div>
                <img className={css.image} src={selectedImage.urls.regular} alt="Image" />
                <button className={css.button} onClick={onRequestClose}>Close</button> 
                </div>
                ) : (
                  <p className={css.text}>No image selected</p>)}
        </Modal>
      );
};
export default ImageModal;