import React from 'react';
import { NavLink } from 'react-router-dom';

// const activeInlineStyle = {
//     color: '#0377e4'
// };

const Nav = () => {
    let activeLink= {
        borderBottom: "solid #0377e4 1px"
    }
    return(
        <nav>
            <header className="header">
                <h1 className="header__heading">Bubbly</h1>
                <ul className="header__ul">
                    <li><NavLink to="/" exact activeStyle={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/products" exact activeStyle={activeLink}>Products</NavLink></li>
                    <li><NavLink to="/contact" exact  activeStyle={activeLink}>Contact</NavLink></li>
                    {/* <li><NavLink>Admin</NavLink></li> */}
                </ul>
            </header>
        </nav>
    )
}

export default Nav;
