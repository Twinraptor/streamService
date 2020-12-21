import React, {useEffect, useState} from 'react';
import usericon from "./male-user-shadow.png";
import "./Navbar.css";


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

function Navbar(props) {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener ("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    
    return (
        <div className={`nav ${show && "nav__white"}`}>
            <h1 className="thefuture">the<b>future</b><b className="purple">.</b></h1>
            {/* <img 
                className="nav__logo"
                src={logo}
                alt="Future Logo"
            /> */}
            {/* <div className="nav__list">
                <ul>
                    <li className="nav__bold">Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div> */}
            <img 
                className="nav__usericon"
                src={usericon}
                alt="User Icon"
            />
        </div>

    )
}

Navbar.propTypes = {

}

export default Navbar

