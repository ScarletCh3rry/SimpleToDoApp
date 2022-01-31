import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyBtn from "../button/MyBtn";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="nav_links_container">
                <Link className="nav_links" to="/about">
                    About website
                </Link>
                <Link className="nav_links" to="/posts">
                    Posts
                </Link>
            </div>
            <MyBtn onClick={logout}>Log Out</MyBtn>
        </div>
    );
};

export default Navbar;