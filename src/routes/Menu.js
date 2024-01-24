import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import underConstructionImage from '../components/assets/site-under-construction-transparent.png';
import '../components/styles/About.css'

const Menu = () => {
    return (
        <>
            <Header />
            <div className="under-construction">

                <div className="overlay">
                    <p>Menu Section - Under Construction</p>
                </div>

                <img src={underConstructionImage} alt="Site Under Construction" />
            </div>
            <Footer />
        </>
    )
}

export default Menu