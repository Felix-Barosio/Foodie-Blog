import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("mainNav").classList.add("scrolled");
        } else {
            document.getElementById("mainNav").classList.remove("scrolled");
        }
    }

    return (
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container px-4 px-lg-5 nav-menu">
                <Link className="navbar-brand" to='/'>
                    <i className="fa-solid fa-utensils"></i>
                    foodie blog
                </Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/post'>Blog</Link>
                        {/* <Link className="nav-link" to='/about'>About Us</Link> */}
                        <Link className="nav-link" to='/contact'>Contact</Link>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <button className="btn btn-primary login" href="/login">Log In</button>
                        </li>
                    </ul>
                </div>
                <button
                    className="navbar-toggler navbar-toggler-left"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav >
    )

}

export default NavBar;

// import React from 'react'
// import { Link, Outlet } from "react-router-dom"

// function NavBar() {
//     return (
//         <div className='header'>
//             <div className='navbar-container'>
//                 <Link className="navbar-logo" to="/">Recipe Blog</Link>
//                 <div className='nav-menu'>
//                     <Link className='nav-links' to="/">Home</Link>
//                     <Link className='nav-links' to="/post">Blogs</Link>
//                     <Link className='nav-links' to="/contact">Contact</Link>
//                 </div>
//             </div>
//             <Outlet />
//         </div>
//     )
// }

// export default NavBar;
