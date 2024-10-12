import css from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ onLoadMore }) => {
  
  const handleClick = () => {
    onLoadMore();
  }

  return (
    <div className={css.loadMoreBtnDiv}>
      <button className={css.btnLoadMore} type="button" onClick={handleClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
