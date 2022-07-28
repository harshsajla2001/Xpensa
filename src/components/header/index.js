import React from "react";
import "./header.css";
import { BsCreditCardFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Header = () => {
    const creadit = { fontSize: "1em", display: "flex" ,justifyContent: "center",
    alignItems: "center" }
    const git = { fontSize: "1.5em", display: "flex" ,justifyContent: "center",
    alignItems: "center" }
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    Xpensa.<BsCreditCardFill style={creadit}/>
                </div>
                <div className="header-button">

                    <a href="http://github.com/harshsajla2001" target='_black' rel='noopener noreferrer'>
                        < BsGithub className='git' style={git}/>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;