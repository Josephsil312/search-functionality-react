import React, { useState } from "react";
import "./SearchBar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { search, close } from "./Redux/user";
let data = [
  {
    title: "12345"
  },
  {
    title: "65789"
  },
  {
    title: "456722"
  },
  {
    title: "567222"
  },
  {
    title: "4445566"
  },
  {
    title: "42069"
  }
];

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(search({ wordEntered }));

    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    dispatch(close({ setWordEntered }));
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a href={value.title} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
