
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from "../../assets/logo.png"


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Find a pet sitter</a></p>
                    <p><a href="#wgpt3">Find a house sit</a></p>

                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p><a href="#possibility">How it works</a></p>
                <p><a href="#features">Help</a></p>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Find a pet sitter</a></p>
                            <p><a href="#wgpt3">Find a house sit</a></p>
                            <p><a href="#possibility">How it works</a></p>
                            <p><a href="#features">Help</a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar