import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import '../style/FrontPage.css'

function FrontPage() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const reveal = () => {
            var reveals = document.querySelectorAll('.info-card');
            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', reveal);
        // Trigger once on load
        reveal();

        return () => window.removeEventListener('scroll', reveal);
    }, []);

    return (
        <>
            <nav>
                {/* 1. SCROLL TO TOP */}
                <a href="#home" className="logo">KAKI GAMERZ<span className="red-dot"></span></a>
                <div className="nav-links desktop-menu">
                    {/* 2. NAVIGATION LINKS POINTING TO IDs (#) */}
                    <a href="#home">Home</a>
                    <a href="#phone">KakiPhone</a>
                    <a href="#watch">KakiWatch</a>
                    <a href="#tablet">KakiPad</a>
                    <a href="#games">Games</a>
                    <a href="#about">About Us</a>
                </div>

                <div className="sidebar" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#phone" onClick={() => setIsOpen(false)}>KakiPhone</a>
                <a href="#watch" onClick={() => setIsOpen(false)}>KakiWatch</a>
                <a href="#games" onClick={() => setIsOpen(false)}>Games</a>
            </div>

            {/* --- TOP SECTION (ID: home) --- */}
            <section id="home" className="hero-section dark-theme short-hero">
                <picture>
                    {/* Mobile: Vertical Cyberpunk City */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1515630278258-407f66498911?w=800&q=80"
                    />
                    {/* Desktop: Original GIF */}
                    <img
                        src="https://i.pinimg.com/originals/cd/f4/95/cdf4951a69fe542e2b7d6a07aa234a1b.gif"
                        className="hero-bg-img"
                        alt="Home Background"
                    />
                </picture>
                <h1 className="hero-store-title">KAKI GAMERZ</h1>
            </section>

            {/* --- PHONE INTRO (ID: phone) --- */}
            <section id="phone" className="hero-section dark-theme">
                <picture>
                    {/* Mobile: Vertical Phone Wallpaper */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
                    />
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/hUQHCvvKAHtNGxtLiB8rjP.gif"
                        className="hero-bg-img"
                        alt="Phone Intro"
                    />
                </picture>
            </section>

            {/* PHONE CARD SECTION */}
            <section className="hero-section dark-theme">
                <picture>
                    {/* Mobile: Abstract Tech Background */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                    />
                    <img
                        src="https://miro.medium.com/v2/1*aTmCQXNJDgO7oQ371gRVvg.gif"
                        className="hero-bg-img"
                        alt="Phone Detail"
                    />
                </picture>
                <div className="info-card reveal">
                    <span className="card-label">Unfair Advantage. 144Hz. Zero Lag</span>
                    <h2 className="card-title">KakiPhone</h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- WATCH INTRO (ID: watch) --- */}
            <section id="watch" className="hero-section dark-theme">
                <picture>
                    {/* Mobile: Vertical Watch Shot */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80"
                    />
                    <img
                        src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/3486306/APPLEWATCH_INTRO.0.gif"
                        className="hero-bg-img"
                        alt="Watch Intro"
                    />
                </picture>
            </section>

            {/* WATCH CARD SECTION */}
            <section className="hero-section dark-theme">
                <picture>
                    {/* Mobile: Dark Tech Background */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
                    />
                    <img
                        src="https://i.pinimg.com/originals/66/97/1d/66971d5b5aeaf2a98116ccb97e0ca10d.gif"
                        className="hero-bg-img"
                        alt="Watch Detail"
                    />
                </picture>
                <div className="info-card reveal">
                    <span className="card-label">Your HUD in real life.</span>
                    <h2 className="card-title">KakiWatch Ultra<span className="red-dot"></span></h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- TABLET INTRO (ID: tablet) --- */}
            <section id="tablet" className="hero-section dark-theme">
                <picture>
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
                    />
                    <img src="https://www.young-minds.sg/sites/default/files/inline-images/iPadAirgif.gif"
                         className="hero-bg-img"
                         alt="Tablet Intro"/>
                </picture>
            </section>

            {/* TABLET CARD SECTION */}
            <section className="hero-section dark-theme">
                <picture>
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80"
                    />
                    <img src="https://www.lowyat.net/wp-content/uploads/2024/05/Apple-iPad-Pro-M4-launch-8.jpg"
                         className="hero-bg-img"
                         alt="Tablet Detail"/>
                </picture>
                <div className="info-card reveal">
                    <span className="card-label">Bigger Screen. Better Headshots.</span>
                    <h2 className="card-title">KakiPad Air</h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- GAMES SECTION (ID: games) --- */}
            <section id="games" className="hero-section dark-theme">
                <picture>
                    {/* Mobile: Gaming Setup Vertical */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1612287230217-969b698c0a12?w=800&q=80"
                    />
                    <img src="https://i.pinimg.com/originals/f0/06/1d/f0061dcf4eb30dded5caeb4bb1730363.gif"
                         className="hero-bg-img"
                         alt="Games Background"/>
                </picture>
                <div className="info-card reveal">
                    <span className="card-label">Got the Gear? Now Get the Game.</span>
                    <h2 className="card-title">Our Latest Games</h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- ABOUT SECTION (ID: about) --- */}
            <section id="about" className="hero-section dark-theme short-hero">
                <picture>
                    {/* Mobile: Team/Office Vertical */}
                    <source
                        media="(max-width: 768px)"
                        srcSet="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                    />
                    {/* Desktop: Replaced with a Team GIF so it's not same as Home */}
                    <img
                        src="https://i.pinimg.com/originals/e8/57/52/e857523049b4c0628372670e88c77229.gif"
                        className="hero-bg-img"
                        alt="About Team Background"
                    />
                </picture>
                <div className="info-card reveal">
                    <span className="card-label">Meet the Kaki Gamerz Team.</span>
                    <h2 className="card-title">Kaki Gamerz Corp.</h2>
                    <Link to="/about" className="btn-shop">Meet the Squad</Link>
                </div>
            </section>

            <footer className="pixel-footer">
                {/* Column 1: Company Info */}
                <div className="footer-column">
                    <h3 className="footer-heading">Kaki Gamerz Corp.</h3>
                    <p>Leveling up reality since 1969.</p>
                </div>

                {/* Column 3: Contact Us */}
                <div className="footer-column">
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="footer-links-list">
                        <li className="contact-info-item">
                            <i className="fa fa-map-marker"></i>
                            <span>USM, Penang, Malaysia</span>
                        </li>
                        <li className="contact-info-item">
                            <i className="fa fa-phone"></i>
                            <span>+60 19-88579</span>
                        </li>
                        <li className="contact-info-item">
                            <i className="fa fa-envelope"></i>
                            <span>kakigamerz@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </footer>

            <div className="footer-bottom">
                <p>&copy; 2025 Kaki Gamerz Corp. All rights reserved.</p>
            </div>
        </>
    )
}

export default FrontPage;