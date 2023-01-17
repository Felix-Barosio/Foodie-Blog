import React from 'react'
import About from './landingpage/about/About';
import Footer from './landingpage/footer/Footer';
import HomePage from './landingpage/homepage/HomePage';
import NavBar from './landingpage/navbar/NavBar';

function Home() {
    return (
        <div>
            <NavBar />
            <HomePage />
            <About />
            <Footer />
        </div>
    )
}

export default Home;

