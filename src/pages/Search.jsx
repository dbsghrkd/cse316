import React, { useState } from "react";
import Nav from '../Nav';

function Search({ onClick }) {

    const [search, setSearch] = useState("");
    const onChange =(e) => {
        setSearch(e.target.value);
    }
  return (
    <div className="Search" style={{backgroundColor: "black"}}>
        <Nav />
            <div className="input-group">  
                <input className="SearchForm" 
                       type="text" 
                       placeholder="Search Titles of Movies, Sports, etc.,"
                       onChange={onChange}/>
                </div>
                <div className="searchResult">
                </div>
            </div>
        );
}

export default Search;