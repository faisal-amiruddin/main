import { useState } from 'react';
import './App.css'
import { Hero } from './components/Hero.tsx'
import { Input } from './components/Input.tsx';
import { About } from './components/About.tsx';
import { TechStack } from './components/TechStack.tsx';
import { Footer } from './components/Footer.tsx';
import { Nav } from './components/Nav.tsx';
import { Contact } from './components/Contact.tsx';


function App() {
  const [user, setUser] = useState('');
  const [visible, setVisible] = useState(true);

  const handleOnClick = () => {
      if (user === '') {
        console.log("Please input your name!")
      } else {
        setVisible(false)
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
  return (
    <>
      <Nav />
      <Hero user={user} />
      <About />
      <TechStack />
      <Contact user={user} />
      <Footer />
    </>
  )
}

export default App
