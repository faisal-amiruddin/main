import { useState } from "react";
import './Certif.css'


export const Certif = () => {
    const certificatesBefore = [
        {src: 'certif-1.jpg', delay: 100},
        {src: 'certif-2.jpg', delay: 200},
        
    ]

    const [isShow, setIsShow] = useState(false);
    
    const handleShow = () => {
        if(!isShow) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }

    return (
        <>
        <div className='certif-scroll'></div>
        <section className="certif-container">
            <div className='certif-title'>
                <h1 data-aos="fade" data-aos-duration="2000">Certificates</h1>
            </div>
            <div className="certifs">
                {
                    certificatesBefore.map((certificate) => (
                        <div className="certif-item" data-aos="fade" data-aos-delay={certificate.delay} data-aos-duration="2000">
                            <img src={certificate.src} />
                        </div>
                    ))
                }
            </div>

            {
                certificatesBefore.length > 4 ? 
                (<div className='load-certif' data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" onClick={handleShow}>
                    {
                        isShow? (<p>Show Less</p>): (<p>Show More</p>)
                    }
                    <i className='load-indicator-certif fas fa-chevron-down'></i>
                </div>)
                :
                null
            }
        </section>
    </>
    )
}