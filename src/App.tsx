import { useState } from 'react';
import './App.css'
import { Hero } from './components/Hero.tsx'
import { Input } from './components/Input.tsx';
import { About } from './components/About.tsx';
import { TechStack } from './components/TechStack.tsx';


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
          <>
              <Input setUser={setUser} />

              <button
              className="btn"
              onClick={handleOnClick}
              >Submit</button>
          </>
      )
  }
  return (
    <>
      <Hero user={user} />
      <About />
      <TechStack />
    </>
  )
}

export default App
