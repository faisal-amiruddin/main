import { useState } from 'react';
import './Nav.css'

export const Nav = () => {
    const navBar = document.querySelector(".navbar") as HTMLElement;
    let prevScrollPos = window.scrollY;

    window.addEventListener("scroll", function () {
        const cursorScrollPos = this.window.scrollY;

        if(navBar) {
            if (cursorScrollPos > prevScrollPos) {
                navBar.style.transform = 'translateY(-105%)';
            } else {
                navBar.style.transform = 'translateY(0%)';
            }
        }
        
        prevScrollPos = cursorScrollPos;
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('.about-scroll') as HTMLElement;
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const scrollToHero = () => {
        const aboutSection = document.querySelector('.hero-scroll') as HTMLElement;
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const scrollToTech = () => {
        const aboutSection = document.querySelector('.tech-scroll') as HTMLElement;
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <i className="fas fa-code icon"></i>
                <div className="menu">
                    <div className={`menu-links ${isMenuOpen ? 'show' : ''}`}>
                        <a onClick={scrollToHero}>Home</a>
                        <a onClick={scrollToAbout}>About</a>
                        <a onClick={scrollToTech}>Tech Stack</a>
                        <a href="#">Certificates</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="menu-btn">
                    {isMenuOpen ? (
                        <i className="fa-solid fa-times" onClick={handleMenuToggle}></i>
                    ) : (
                        <i className="fa-solid fa-bars" onClick={handleMenuToggle}></i>
                    )}
                </div>
            </nav>
        </>
    );
}