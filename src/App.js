import './App.css'
import React from 'react'
import HeroSection from './components/HeroSection'
import Nav from './components/Headers'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Nav />
            <HeroSection />
            <Main />
            <Footer />
        </>
    );
}

export default App;
