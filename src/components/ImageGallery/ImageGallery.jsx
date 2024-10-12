
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({data}) => {
  return (
    <ul className={css.imageList}>
      {data.map(card => <ImageCard key={card.id} cardData={card} />)}
</ul>
  )
}

export default ImageGallery
