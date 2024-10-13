import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageModal from './components/ImageModal/ImageModal'
import {fetchPhotos} from "./apiService/fetchCardData"


import './App.css'
import { useState, useEffect} from 'react'

function App() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [param, setParam] = useState("");
  const [loader, setLoader] = useState(false);
  const [more, setMore] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectImg, setSelectImg] = useState({
    urls: {
      regular: '',
    },
  });

  const onSubmit = (query) => {
    setPhotos([]);
    setPage(1);
    setParam(query);
  }

  const onLoadMore = () => {
    setPage(page + 1);
  }

  const modalOpen = imgData => {
    const { urls, alt_description, likes } = imgData;
    setModal(true);
    setSelectImg({
      urls,
      alt_description,
      likes,
    });
  };

  const modalClose = () => {
    setModal(false);
  };

  useEffect(() => {

    if (!param) return;
    setLoader(true);

  async function getSearchData () {
    try {
      const data = await fetchPhotos(param, page);
      setPhotos((prevPhotos) => page === 1 ? data.results : [...prevPhotos, ...data.results]);
      page < data.total_pages ? setMore(true) : setMore(false);
      console.log(data)
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoader(false);
    }
  }
    getSearchData();
}, [param, page])
  
useEffect(() => {
    if (page > 1) {
      const scrollValue = window.innerHeight / 1.5;
      window.scrollBy({
        top: scrollValue,
        behavior: 'smooth',
      });
    }
  }, [photos]);
  
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader/>}
      {error !== null ? <ErrorMessage error={error} /> : <ImageGallery data={photos} isOpen={modalOpen} />}
      {more && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <ImageModal
        modal={modal}
        onClose={modalClose}
        selectedImage={selectImg}
      />
    </>
  )
}

export default App
