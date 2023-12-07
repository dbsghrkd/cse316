import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import homeIcon from './assets/Home_image.png';
import searchIcon from './assets/search.png';
import infoIcon from './assets/mypageicon.png';
import logoIcon from './assets/Cinema.jpg';
import './Nav.css';

function Nav() {
    
    return (
        <div className="Nav">
            <nav class="navbar navbar-light bg-dark">
                <div className="align-items-center">
                    <Link className="navbar-brand" to={'/Home'}>
                        <img src={homeIcon} className="iconPosition" width="30" height="30" alt="Home"></img>
                    </Link>
                    <Link className="navbar-brand" to={'/Home'}>
                    <img src={logoIcon} width="100" alt="Logo"></img>     
                    </Link>
                </div>
                <ul className="nav justify-content-right">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"#"} role="button" aria-expanded="false">Categories</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/Series"}>Series</Link></li>
                                <li><Link className="dropdown-item" to={"/Movies"}>Movies</Link></li>
                            </ul>
                        </li>
                    <li className="nav-item">
                        <form className="form-inline">
                            <input className="searching" type="search" placeholder="Search" aria-label="Search" style={{display: "none"}}/>    
                                <Link className="nav-link" to={'/Search'}>
                                    <img src={searchIcon} width="30" height="30"></img>
                                </Link>
                        </form>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mypageIcon" to={'/Info'}>
                            <img src={infoIcon} width="30" height="30"></img>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>


    )
}

export default Nav;