import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import {fetchPhotos} from "./apiService/fetchCardData"


import './App.css'
import { useState, useEffect, useRef } from 'react'

function App() {

  const getSearchData = async () => {
    try {
      const data = await fetchPhotos("Black mirror", 1);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <LoadMoreBtn/>
    </>
  )
}

export default App
