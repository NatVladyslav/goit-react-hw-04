import css from "./ImageCard.module.css"

const ImageCard = ({cardData, isOpen}) => {
    return (
        <li className={css.imgCard} onClick={()=> isOpen(cardData)}>
                <img className={css.img} src={cardData.urls.small} alt={cardData.alt_description} />
      </li>
  )
}

export default ImageCard
