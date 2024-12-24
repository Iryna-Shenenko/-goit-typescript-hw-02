type ImageModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    selectedImage: Image | null;
}