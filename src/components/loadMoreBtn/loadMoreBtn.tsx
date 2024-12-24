import React from "react";
import css from "./loadMoreBtn.module.css";


const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
    return (
      <button className={css.button} onClick={handleLoadMore}>
        Load more
      </button>
    );
  };
  
  export default LoadMoreBtn;