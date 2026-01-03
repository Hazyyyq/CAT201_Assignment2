import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import '../style/AboutPage.css'
import Footer from "../components/Footer.jsx";

function FrontPage() {
    const [isOpen, setIsOpen] = useState(0);

    return (<>

        <nav>
            <div className="nav-content">
                <Link to="/" className="logo">Kaki Gamerz</Link>
                <div className="nav-links desktop-menu">
                    <Link to="/phone">Phone</Link>
                    <Link to="/watch">Watch</Link>
                    <Link to="/tablet">Tablet</Link>
                    <Link to="/games">Games</Link>
                    <Link to="/about">About Us</Link>
                </div>
                <div className="nav-icons"></div>
                <div className="search-box">
                    <i className="fa fa-search"></i>
                </div>
                <div className="sidebar" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </div>

            <div className={`mobile-menu ${isOpen ? "active" : " "}`}>
                <Link to="/phone">Phone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tablet">Tablet</Link>
                <Link to="/games">Games</Link>
                <Link to="/about">About Us</Link>
            </div>

        </nav>

        <main className="container">

            <div className="brand-header">
                <h1 className="big-brand-title">KAKI <span className="neon-text-title">GAMERZ</span></h1>
                <hr className="separator2"/>
                <div className="brand-tagline">YOUR REALITY, LEVELED UP.</div>

                <p className="about-text">
                    At <strong className="text-white">Kaki Gamerz</strong>, we define the intersection of gaming
                    culture and modern mobility.
                    We are your premier destination for the latest <span className="highlight">video games</span>,
                    high-performance <span className="highlight">smartphones</span>, versatile tablets, and
                    essential
                    smart wearables.
                    We move beyond traditional gaming boundaries to provide a curated ecosystem of genuine tech,
                    ensuring every enthusiast is equipped with the best tools to <strong className="text-white">play,
                    connect, and thrive</strong>.
                </p>

            </div>

            <div className="All-Grid">

                <article className="managerProfile">
                    <img src="/img/Airil.jpeg" alt="Airil Aiman bin Azman"/>
                    <div className="info">
                        <h5>Airil Aiman bin Azman</h5>
                        <p>Founder & CEO</p>

                        <p className="job-desc">
                            I am dedicated to curating the best technology in the industry, ensuring that whether
                            you are a casual player or a pro athlete, you have the tools to win
                        </p>

                    </div>
                    <ul className="ManagerSocMed">
                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </article>

                <article className="managerProfile">
                    <img src="/img/Aiman.jpeg" alt="Mohammad Aiman Akmal bin Azlan"/>
                    <div className="info">
                        <h5>Mohammad Aiman Akmal bin Azlan</h5>
                        <p>Chief Technology Officer</p>

                        <p className="job-desc">
                            Oversees the technological vision of Kaki Gamerz, leading the development of our digital
                            store and innovative shopping features
                        </p>

                    </div>
                    <ul className="ManagerSocMed">
                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </article>

                <article className="managerProfile">
                    <img src="/img/Johan.png" alt="Muhammad Johan bin Talib"/>
                    <div className="info">
                        <h5>Muhammad Johan bin Talib</h5>
                        <p>Chief Financial Officer</p>

                        <p className="job-desc">
                            Handles financial planning, budgeting, investor relations, compliance, and long-term
                            financial health
                        </p>

                    </div>
                    <ul className="ManagerSocMed">
                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </article>

                <article className="managerProfile">
                    <img src="/img/Haziq.png" alt="Muhammad Haziq Irsyad bin Mohd Rafeein"/>
                    <div className="info">
                        <h5>Muhammad Haziq Irsyad bin Mohd Rafeein</h5>
                        <p>Chief Operating Officer</p>

                        <p className="job-desc">
                            Manages day-to-day operations, ensures efficiency, translates CEO’s vision into
                            practical workflows
                        </p>

                    </div>
                    <ul className="ManagerSocMed">
                        <li><a href="https://www.instagram.com/be_ziq?igsh=MWJwcnZ5cjdnbm40bQ==" target="_blank"><i
                            className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/hzq.irsyad?igsh=MTR4dm9jdXgwMXgzbA=="
                               target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a
                            href="https://my.linkedin.com/in/haziq-irsyad-r-535a4b314?trk=people-guest_people_search-card"
                            target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </article>

            </div>

            <hr className="separator"/>

            <section className="video-section">

                <video autoPlay muted loop playsInline className="back-video">
                    <source src="/vid/GravitiGamerz.mp4" type="video/mp4"/>
                </video>

                <div className="video-overlay"></div>

                <div className="MissionVision-container">

                    <h2 className="section-title">Our <span className="highlight">Mission</span></h2>

                    <p>
                        To create the ultimate home ground for the <strong>Real Kaki Gamerz</strong>.
                        We don't just sell gadgets; we fuel the lifestyle of those who live and breathe gaming,
                        providing a <span className="highlight">trusted ecosystem</span> for our tribe.
                    </p>

                </div>
            </section>

            <hr className="separator"/>

            <section className="video-section">

                <video autoPlay muted loop playsInline className="back-video">
                    <source src="/vid/GravitiGamerz_2.mp4" type="video/mp4"/>
                </video>

                <div className="video-overlay"></div>

                <div className="MissionVision-container">
                    <h2 className="section-title">Our <span className="highlight">Vision</span></h2>

                    <p>
                        A borderless <strong>Gaming Empire</strong> where the Real Kaki Gamerz spirit
                        thrives—connecting
                        every enthusiast to the <span className="highlight">gear, games, and glory</span> they
                        deserve.
                    </p>

                </div>
            </section>

        </main>
        <Footer/>
    </>)
}

export default FrontPage;
