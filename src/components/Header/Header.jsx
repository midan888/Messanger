import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className={css.header}>
                <div className={css.logo}>
                    <h1>IDEA</h1>
                </div>
                <nav className={css.nav}>
                    <nav className={css.nav}>
                        <NavLink className={css.link} activeClassName={css.activeLink} to='/Discover'>Discover</NavLink>
                        <NavLink className={css.link} activeClassName={css.activeLink} to='/Profile'>Profile</NavLink>
                        <NavLink className={css.link} activeClassName={css.activeLink} to='/Followers'>Followers</NavLink>
                        <NavLink className={css.link} activeClassName={css.activeLink} to='/Messages'>Messages</NavLink>
                        <NavLink className={css.link} activeClassName={css.activeLink} to='/Settings'>Settings</NavLink>
                    </nav>
                </nav>
                <div>
                    <a className={css.login} href="#">Login</a>
                </div>
            </header>
        );
    }
}

export default Header;