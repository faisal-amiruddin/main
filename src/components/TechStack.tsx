import { useState } from 'react'
import './TechStack.css'

export const TechStack = () => {
    const stacksLess = [
        {icon: 'devicon-html5-plain', name: 'HTMl'},
        {icon: 'devicon-css3-plain', name: 'CSS'},
        {icon: 'devicon-javascript-plain', name: 'JavaScript'},
        {icon: 'devicon-typescript-plain', name: 'TypeScript'},
        {icon: 'devicon-react-original', name: 'React'},
    ]

    const stacksAll = [
        {icon: 'devicon-html5-plain', name: 'HTMl'},
        {icon: 'devicon-css3-plain', name: 'CSS'},
        {icon: 'devicon-javascript-plain', name: 'JavaScript'},
        {icon: 'devicon-typescript-plain', name: 'TypeScript'},
        {icon: 'devicon-react-original', name: 'React'},
        {icon: 'devicon-mysql-original', name: 'MySQL'},
        {icon: 'devicon-java-plain', name: 'Java'},
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
                            <div className="skill-item" data-aos="fade" data-aos-delay="300" data-aos-duration="2000">
                                <i className={stack.icon}></i>
                                <h3>{stack.name}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className='load' data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" onClick={handleShow}>
                    {
                        isShow? (<p>Show Less</p>): (<p>Show More</p>)
                    }
                    <i className='load-indicator fas fa-chevron-down'></i>
                </div>
            </section>
        </>
    )
}