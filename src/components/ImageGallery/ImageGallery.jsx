
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({data, isOpen}) => {
  return (
    <ul className={css.imageList}>
      {data.map(card => <ImageCard key={card.id} cardData={card} isOpen={isOpen} />)}
</ul>
  )
}

export default ImageGallery
