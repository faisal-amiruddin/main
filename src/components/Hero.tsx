import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface HeroProps {
    user: string;
}

export const Hero: React.FC<HeroProps> = ({ user }) => {
    useEffect(() => {
        AOS.init();
      }, []);

    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero-content')  as HTMLElement;;
        if (hero) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            hero.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        }
    });

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('.about-scroll') as HTMLElement;
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='hero-scroll'></div>
            <section className='hero' >
                <div className="hero-content">
                    <div className='menyapa' data-aos="fade-up" data-aos-duration="2000">
                        <h2>Hello {user}, Welcome to My Website 👋</h2>
                    </div>
                    
                    <h1 className="gradient-text" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="2000">I'm Faisal Amiruddin</h1>
                    <p data-aos-delay="1100" data-aos="fade-up" data-aos-duration="2000">Trying to Become a Full Stack Developer</p>
                    <button onClick={scrollToAbout} data-aos-delay="2000" data-aos="fade-up" data-aos-duration="2500">Explore My Portofolio</button>
                    <br  />
                    <i className='scroll-indicator fas fa-chevron-down'></i>
                </div>

            </section>
        </>
    );
}