type ErrorState = {
    isActive: boolean;
    errCode: string;
    errMsg: string;
  }
  

  type  ApiResponse = {
    results: Image[];
    total_pages: number;
  }
 type AppProps = {}

 type Image = {
    id: number;
    urls: {
        small: string;
        regular: string;
        full: string;
    };
    alt_description: string | null;
    description: string | null;
};


type ImageCardProps =  {
    image: Image;
    handleModal: (image: Image) => void;
}
type ImageGalleryProps = {
    data: Image[];
    handleModal: (image: Image) => void;}


type ImageModalProps = {
        isOpen: boolean;
        onRequestClose: () => void;
        selectedImage: Image | null;
    }
    type LoadMoreBtnProps = {
        handleLoadMore: () => void;}

        type  FetchImagesParams = {
            query: string;
            per_page: number;
            page: number;
          }

          type FetchImagesResponse = {
            results: Image[];
            total_pages: number;
            total: number;
          }
          type SearchBarProps = {
            handleQuery: (query: string) => void;
            query: string;
            id: string;
        }

        type ErrorMessageProps = {
            message: string;
        }