import css from "./SearchBar.module.css"
import toast, { Toaster } from "react-hot-toast";
import { TbSearch } from "react-icons/tb"
import { IconContext } from "react-icons";

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
        <IconContext.Provider value={{color: "#55883B", size: 35, className: "submitIcon"}}>
          <button className={css.submitButton} type="submit">
          <TbSearch/>
        </button>
        </IconContext.Provider>
    <input
      className={css.formInput}
          type="text"
          name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
      </form>
      <Toaster
      containerStyle={{
    top: 100
  }}/>
</header>
  )
}

export default SearchBar
