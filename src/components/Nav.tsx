import { useState, useEffect } from 'react';
import './Nav.css'

export const Nav = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

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
            <nav className="navbar" style={{ 
                transform: visible ? 'translateY(0)' : 'translateY(-100%)'
            }}>
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