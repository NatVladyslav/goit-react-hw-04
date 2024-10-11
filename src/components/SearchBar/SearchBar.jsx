import css from "./SearchBar.module.css"
const SearchBar = () => {
    const handleSubmit = () => {
        
    }

  return (
<header className={css.header}>
  <form className={css.searchForm} onSubmit={handleSubmit()}>
    <input
      className={css.formInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={css.submitButton} type="submit">Search</button>
  </form>
</header>
  )
}

export default SearchBar
