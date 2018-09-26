import React from 'react';
import { NavLink } from 'react-router-dom';

// const activeInlineStyle = {
//     color: '#0377e4'
// };

const Footer = () => {
    return(
        // <nav>
        //     <header className="header">
        //         <h1 className="header__heading">Bubbly</h1>
        //         <ul class="header__ul">
        //             <li><NavLink to="/" exact activeStyle={activeLink}>Home</NavLink></li>
        //             <li><NavLink to="/products" exact activeStyle={activeLink}>Products</NavLink></li>
        //             <li><NavLink to="/contact" exact  activeStyle={activeLink}>Contact</NavLink></li>
        //             {/* <li><NavLink>Admin</NavLink></li> */}
        //         </ul>
        //     </header>
        // </nav>

        <footer className="footer">
        <nav className="footer__nav">
            <ul className="nav__ul--pages">
                <li>
                    <NavLink to="/" exact className="a">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" exact className="a">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact className="a">Contact</NavLink>
                </li>
            </ul>
            <ul className="nav__ul--social">
                <li>
                    <img src="img/facebook.svg" alt="This is an icon that links to Facebook" />
                </li>
                <li>
                    <img src="img/twitter.svg" alt="This is an icon that links to Twitter" />
                </li>
                <li>
                    <img src="img/youtube.svg" alt="This is an icon that links to YouTube" />
                </li>
            </ul>
        </nav>
    </footer>
    )
}

export default Footer;
