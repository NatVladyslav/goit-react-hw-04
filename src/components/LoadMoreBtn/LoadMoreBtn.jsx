import css from "./LoadMoreBtn.module.css"
import { FaArrowDown } from "react-icons/fa"
const LoadMoreBtn = ({ onLoadMore }) => {
  
  const handleClick = () => {
    onLoadMore();
  }

  return (
    <div className={css.loadMoreBtnDiv}>
      <button className={css.btnLoadMore} type="button" onClick={handleClick}>Load more   <FaArrowDown/></button>
    </div>
  )
}

export default LoadMoreBtn
