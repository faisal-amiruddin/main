import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const About = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
            <div className='about-scroll'></div>
            <section className="about" >
                <div data-aos="flip-right" data-aos-duration="2000">
                    <img src="pp.jpg" alt="Me" />
                </div>
                <div className='about-content' >
                    <h1 data-aos="fade" data-aos-duration="3000">About Me</h1>
                    <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="2500">I am an Informatics Engineering student with a strong passion for web development, continuously learning and improving my skills in the field. Although I am just starting out as a frontend developer, I focus on creating responsive websites and interactive applications that deliver optimal user experiences.</p>
                    <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="2500">I always strive to combine creative design with efficient code to develop solutions that meet user needs.</p>
                </div>
            </section>
        </>
    )
}
