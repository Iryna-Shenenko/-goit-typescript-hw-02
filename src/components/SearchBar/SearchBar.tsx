import css from "./SearchBar.module.css";
import React, {FormEvent} from "react";
import toast, { Toaster } from "react-hot-toast";


const SearchBar: React.FC<SearchBarProps> = ({handleQuery}) => {
  const createQuery = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newQuery = evt.currentTarget.elements.namedItem("query") as HTMLInputElement;
     const queryValue = newQuery.value.trim().toLowerCase();
    if (queryValue === "") { return toast.error("Search cannot be empty");}
    
    evt.currentTarget.reset();
    return handleQuery(queryValue);
  };
  return (
    <header className={css.container}>
      <form  className={css.form} onSubmit={createQuery}>
      
     
        <input
         className={css.text}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
          <button className={css.button} type="submit">Search</button>
          <Toaster />
     
      </form>
    </header>
  );
};

export default SearchBar;