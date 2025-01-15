import './TechStack.css'

export const TechStack = () => {
    return (
        <>
            <div className='tech-scroll'></div>
            <section className="stack">
                <div className='stack-title'>
                    <h1 data-aos="fade" data-aos-duration="2000">Tech Stacks</h1>
                </div>
                <div className="skills">
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-html5-plain"></i>
                        <h3>HTML5</h3>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-css3-plain"></i>
                        <h3>CSS3</h3>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-javascript-plain"></i>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-typescript-plain"></i>
                        <h3>TypeScript</h3>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-react-original"></i>
                        <h3>React</h3>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-mysql-original"></i>
                        <h3>MySQL</h3>
                    </div>
                    <div className="skill-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
                        <i className="devicon-java-plain"></i>
                        <h3>Java</h3>
                    </div>
                </div>
            </section>
        </>
    )
}