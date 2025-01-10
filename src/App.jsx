import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/* Buttons */
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import OutlinedButton from './buttons/OutlinedButton';
import TextButton from './buttons/TextButton';

/* Icons */
import { HologramIcon, Home01Icon, InstagramIcon, Linkedin01Icon, ThreadIcon, ThreadsIcon, YoutubeIcon, } from "hugeicons-react";
import { Facebook01Icon } from "hugeicons-react";



import './App.css'
import { Header } from './Header'
import { Projects } from './Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="portfolio">

        {/* Main Hero Section */}
        <main className="hero">
          <h1>Chandrasekhar Baksi is an independent designer based in the Chandigarh. I’m a product designer with 15 years of experience across brand and product, at companies large and small. I’m not actively looking for a new role.</h1>
          <p className="text-sm/[16px] ...">
            This is body text. It uses the base font size (16px) with line height and letter spacing applied.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Work with Me</button>
            <button className="btn-secondary">Read more</button>
          </div>

          {/* Social Media Stats */}
          <div className="stats">
            <div className="stat-item"> <Facebook01Icon />118.2k</div>
            <div className="stat-item"> <InstagramIcon />85.4k</div>
            <div className="stat-item"> <Linkedin01Icon />30.2k</div>
            <div className="stat-item"> <ThreadsIcon />29.1k</div>
            <div className="stat-item"> <YoutubeIcon />New</div>
          </div>
        </main >

      </div >

      <Projects />
    </>
  )
}

export default App
