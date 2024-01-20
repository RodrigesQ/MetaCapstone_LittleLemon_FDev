// Main.js
import React from 'react';

const Main = () => {
    return (
        <main>
            {/* Main content goes here */}
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    {/* Hero text content goes here */}
                </div>
                <div className="hero-image">
                    {/* Hero image goes here */}
                </div>
            </section>

            {/* Highlights Section */}
            <section className="highlights">
                {/* Three card elements and button */}
                <div className="highlight-card"></div>
                <div className="highlight-card"></div>
                <div className="highlight-card"></div>
                <button className="highlight-button">View All</button>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                {/* Four card elements */}
                <div className="testimonial-card"></div>
                <div className="testimonial-card"></div>
                <div className="testimonial-card"></div>
                <div className="testimonial-card"></div>
            </section>

            {/* About Section */}
            <section className="about">
                {/* About content goes here */}
            </section>
        </main>
    );
}

export default Main;
