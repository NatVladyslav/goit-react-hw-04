import css from "./SearchBar.module.css"
import toast, {Toaster} from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.search.value.trim();
    value ? onSubmit(value) : toast.custom(<div className={css.toast}>You need to enter the text to find images</div>)
    form.reset();
    }

  return (
<header className={css.header}>
  <form className={css.searchForm} onSubmit={handleSubmit}>
    <input
      className={css.formInput}
          type="text"
          name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={css.submitButton} type="submit">Search</button>
      </form>
      <Toaster
      containerStyle={{
    top: 100
  }}/>
</header>
  )
}

export default SearchBar
