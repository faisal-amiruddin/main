import { useState } from 'react'
import './TechStack.css'

export const TechStack = () => {
    const stacksLess = [
        {icon: 'devicon-html5-plain', name: 'HTMl', delay: '100'},
        {icon: 'devicon-css3-plain', name: 'CSS', delay: '200'},
        {icon: 'devicon-javascript-plain', name: 'JavaScript', delay: '300'},
        {icon: 'devicon-typescript-plain', name: 'TypeScript', delay: '400'},
        {icon: 'devicon-react-original', name: 'React', delay: '500'},
    ]

    const stacksAll = [
        {icon: 'devicon-html5-plain', name: 'HTMl', delay: '100'},
        {icon: 'devicon-css3-plain', name: 'CSS', delay: '200'},
        {icon: 'devicon-javascript-plain', name: 'JavaScript', delay: '300'},
        {icon: 'devicon-typescript-plain', name: 'TypeScript', delay: '400'},
        {icon: 'devicon-react-original', name: 'React', delay: '500'},
        {icon: 'devicon-mysql-original', name: 'MySQL', delay: '600'},
        {icon: 'devicon-java-plain', name: 'Java', delay: '700'},
    ]

    const [isShow, setIsShow] = useState(false);

    const handleShow = () => {
        if(!isShow) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }

    const currentShow = isShow ? stacksAll : stacksLess;

    return (
        <>
            <div className='tech-scroll'></div>
            <section className="stack">
                <div className='stack-title'>
                    <h1 data-aos="fade" data-aos-duration="2000">Tech Stacks</h1>
                </div>
                <div className="skills">
                    {
                        currentShow.map((stack) => (
                            <div className="skill-item" data-aos="fade" data-aos-delay={stack.delay} data-aos-duration="2000">
                                <i className={stack.icon}></i>
                                <h3>{stack.name}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className='load-skills' data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" onClick={handleShow}>
                    {
                        isShow? (<p>Show Less</p>): (<p>Show More</p>)
                    }
                    <i className='load-indicator-skills fas fa-chevron-down'></i>
                </div>
            </section>
        </>
    )
}