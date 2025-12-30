import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

import '../style/FrontPage.css'

function FrontPage() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', reveal);

        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 100;
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }
            }
        }

        reveal();
    })
    return (
        <>
            <nav>
                <div className="nav-content">

                    <Link to="/" className="logo">Kaki Gamerz</Link>

                    <div className="nav-links">
                        <a href="#">Phone</a>
                        <a href="#">Watch</a>
                        <a href="#">Tablet</a>
                        <a href="#">Games</a>
                        <Link to="/about">About Us</Link>

                    </div>

                    <div className="search-box">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </nav>

            <section className="hero-section dark-theme">

                <div className="content-wrapper reveal">
                    <h2 className="headline">KakiPhone</h2>
                    <h3 className="subhead">Unfair Advantage. 144Hz. Zero Lag</h3>
                    <div className="cta-links">
                        <a href="#" className="btn btn-blue">Learn More</a>
                        <a href="#" className="btn btn-outline">Buy</a>
                    </div>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1732020883989-b22d66f8f1b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9nJTIwZ2FtaW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
                    className="hero-image reveal"
                    alt="Gaming SmartPhone"/>

            </section>

            <section className="hero-section light-theme">
                <div className="content-wrapper reveal">
                    <h2 className="headline" style={{color: 'black'}}>KakiWatch Ultra</h2>
                    <h3 className="subhead" style={{color: 'black'}}>Your HUD in real life.</h3>

                    <div className="cta-links">
                        <a href="#" className="btn btn-blue">Learn More</a>
                        <a href="#" className="btn btn-outline-dark">Buy</a>
                    </div>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1594619272803-932ee1b5a0d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0d2F0Y2glMjBnYW1pbmclMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="hero-image reveal"
                    alt="Watch"/>
            </section>

            <section className="hero-section dark-theme">
                <div className="content-wrapper reveal">
                    <h2 className="headline">KakiPad Air</h2>
                    <h3 className="subhead">Bigger Screen. Better Headshots.</h3>

                    <div className="cta-links">
                        <a href="#" className="btn btn-blue">Learn more</a>
                        <a href="#" className="btn btn-outline">Buy</a>
                    </div>
                </div>

                <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2015&auto=format&fit=crop"
                     className="hero-image reveal"
                     alt="iPad"/>
            </section>

            <div className="grid-section">
                <div className="grid-item reveal">
                    <h2 className="grid-title">Latest Games</h2>
                    <p className="grid-desc">Console & PC Titles.</p>
                    <a href="#" className="link">See the library</a>
                    <img
                        src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
                        alt="Gaming"/>
                </div>

                <div className="grid-item reveal">
                    <h2 className="grid-title">About us</h2>
                    <p className="grid-desc">Meet the Kaki Gamerz Team.</p>
                    <a href="/HTML/aboutPage.html" className="link">Meet the Squad.</a>
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team"/>
                </div>
            </div>
        </>
    )
}

export default FrontPage;
