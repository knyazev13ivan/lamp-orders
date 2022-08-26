import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSearchValue } from "../store/search/searchSlice";
import svgSearch from "../icons/search.svg";
import "../styles/search.scss";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchValue(e.target.value));

  return (
    <div className="search">
      <input type="text" value={searchValue} onChange={handleChangeSearch} />
      <img src={svgSearch} alt="search" />
    </div>
  );
};

export default Search;
