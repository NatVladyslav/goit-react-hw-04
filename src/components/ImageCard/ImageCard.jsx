import css from "./ImageCard.module.css"

const ImageCard = ({cardData}) => {
    return (
        <li className={css.imgCard}>
                <img className={css.img} src={cardData.urls.small} alt={cardData.alt_description} />
      </li>
  )
}

export default ImageCard
