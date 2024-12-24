import React, {useState, useEffect} from "react";
import fetchImages from "../../Api/Api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/loadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App: React.FC<AppProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [results, setResults] = useState<Image[]>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [perPage, setPerPage] = useState<number>(10);
  const [error, setError] = useState<ErrorState>({
    isActive: false,
    errCode: "",
    errMsg: "",
  });

  const handleModal = (imageData: Image): void => {
    setSelectedImage(imageData);
    toggleIsOpen();
  };

  const toggleIsOpen = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
    setPagination(true);
  };

  const handleQuery = (query: string, perPage: number): void => {
    if (perPage !== "") setPerPage(perPage);
    setFirstLoad(true);
    setQuery(query);
    setPagination(false);
    setPage(1);
  };
  useEffect(() => {
    if (!query) return;
    (async () => {
      try {
        setLoader(true);
        setError({ isActive: false, errCode: "", errMsg: "" });
        setTotalPages(0);
        const data: ApiResponse = await fetchImages(query, perPage, page);
        if (pagination) {
          setResults((prev) => [...prev, ...data.results]);
          setTotalPages(data.total_pages);
          return;
        }
        setTotalPages(data.total_pages);
        setResults(data.results);
      } catch (err: any) {
        setError({
          isActive: true,
          errCode: err.status,
          errMsg: err?.response?.data?.errors?.join(",") || "Unknown error",
        });
      } finally {
        setLoader(false);
        setFirstLoad(false);
      }
    })();
  }, [query, page, pagination, perPage]);

  return (
    <div>
      <SearchBar handleQuery={handleQuery} query={query} id="gallery" />
      {firstLoad ? (
        ""
      ) : results.length > 0 ? (
        <ImageGallery data={results} handleModal={handleModal} />
      ) : (
        <h2>Image not Found ...</h2>
      )}
      {error.isActive && <ErrorMessage massage={error.errMsg} />}
      {loader && <Loader />}
      {page < totalPages && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={toggleIsOpen}
        selectedImage={selectedImage!} // 'selectedImage' гарантовано не null при відкритті модалки
      />
    </div>
  );
};

export default App;