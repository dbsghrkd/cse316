import React, { useState } from "react";
import Nav from '../Nav';
import search from '../assets/search.png';

function Search({ onClick }) {

    const [search, setSearch] = useState("");
    const onChange =(e) => {
        setSearch(e.target.value);
    }
    // const filterTitle = movies.filter((p) => {
    //     return p.title.replace(" ","").toLocalLowerCase().includes(search,toLocalLowerCase().replace(" ",""));
    // })
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
                    {/* {filterTitle.map(movie => <div><span>{moviee.title}</span>)
                    </div>)} */}
                </div>
            </div>
        );
}

export default Search;