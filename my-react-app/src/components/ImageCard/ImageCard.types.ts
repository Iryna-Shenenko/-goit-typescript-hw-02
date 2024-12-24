type Image = {
    id: number;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string | null;
    description: string | null;
};


type ImageCardProps =  {
    image: Image;
    handleModal: (image: Image) => void;
}