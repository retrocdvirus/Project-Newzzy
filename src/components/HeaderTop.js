import React from "react";
import ProjectLogo from "../images/project-logo.png";
import {BiSearch} from "react-icons/bi";
import "./HeaderTop.css";

const HeaderTop = () => {
    return (
        <div className="app__header-top">
            <div className="app__header-top-img-container">
                <img src={ProjectLogo} alt="project logo" />
            </div>
            <div className="app__header-top-searchbar">
                <BiSearch className="app__header-top-searchbar-icon" />
                <input 
                    type="text" 
                    placeholder="Search for the verified news" 
                />
            </div>

            <nav className="app__header-top-navbar">
                <ul className="app__header-top-navbar-links">
                    {
                        ["Home", "Sign Up", "Log In"].map((item) => (
                            <li key={`link-${item}`}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default HeaderTop;