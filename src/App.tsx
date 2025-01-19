import { useEffect, useState } from 'react';
import './App.css'
import { Hero } from './components/Hero.tsx'
import { Input } from './components/Input.tsx';
import { About } from './components/About.tsx';
import { TechStack } from './components/TechStack.tsx';
import { Footer } from './components/Footer.tsx';
import { Nav } from './components/Nav.tsx';
import { Contact } from './components/Contact.tsx';
import { Certif } from './components/Certif.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [user, setUser] = useState('');
  const [visible, setVisible] = useState(true);
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleOnClick = () => {
      if (user === '') {
        console.log("Please input your name!")
      } else {
        setVisible(false)
        setWelcome(true)
      }
  }

  if (visible) {
    
    return (
        <section className='input-show'>
            <Input setUser={setUser} />

            <button
            className="btn"
            onClick={handleOnClick}
            >Submit</button>
        </section>
    )
  }

  if (welcome) {
    setTimeout(() => {
      setWelcome(false);
    }, 3000);
    return (
      <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 >Hello {user}, Welcome to My Portofolio Website</h1>
      </div>
      </>
    )
  }



  return (
    <>
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Certif />
      <Contact user={user} />
      <Footer />
    </>
  )
}

export default App
