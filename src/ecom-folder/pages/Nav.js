import React from 'react';
import { NavLink } from 'react-router-dom';
import auth0Client from '../../Auth';

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
{auth0Client.isAuthenticated() ? <li><NavLink to="/admin" exact activeStyle={activeLink}>Admin</NavLink></li> : null}
                    <li>{!auth0Client.isAuthenticated() && (
                 <button onClick={auth0Client.signIn} className="loginButton">Log In</button>
               )}
               {auth0Client.isAuthenticated() && (
                   <button onClick={auth0Client.signOut} className="loginButton">Log Out</button>
               )}</li>
                </ul>
            </header>
        </nav>
    )
}

export default Nav;
