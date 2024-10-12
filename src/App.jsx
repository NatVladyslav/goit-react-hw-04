import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import {fetchPhotos} from "./apiService/fetchCardData"


import './App.css'
import { useState, useEffect} from 'react'

function App() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [param, setParam] = useState("");
  const [loader, setLoader] = useState(false);
  const [more, setMore] = useState(false);

  const onSubmit = (query) => {
    setPhotos([]);
    setPage(1);
    setParam(query);
  }

  const onLoadMore = () => {
    setPage(page + 1);
  }

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
      console.log(error);
    } finally {
      setLoader(false);
    }
  }
    getSearchData();
}, [param, page])
  
  
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader/>}
      <ImageGallery data={photos} />
      {more && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  )
}

export default App
