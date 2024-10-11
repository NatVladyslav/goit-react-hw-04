import css from "./LoadMoreBtn.module.css"
const LoadMoreBtn = () => {
  return (
    <div className={css.loadMoreBtnDiv}>
      <button className={css.btnLoadMore} type="button">Load more</button>
    </div>
  )
}

export default LoadMoreBtn
