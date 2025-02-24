import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { HugeiconsIcon } from '@hugeicons/react';

/* Buttons */
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import OutlinedButton from './buttons/OutlinedButton';
import TextButton from './buttons/TextButton';

/* Icons */
// import { InstagramIcon, Linkedin01Icon, ThreadsIcon, YoutubeIcon, Facebook01Icon } from '@hugeicons/core-free-icons';




import './App.css'
import { Header } from './Header'
import { Projects } from './Projects';
import DesignSystemSection from './DesignSystemSection';

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
            — Previously at Upwork Talent (Freelancing)
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Work with Me</button>
            <button className="btn-secondary">Read more</button>
          </div>

          {/* Social Media Stats */}
          {/* <div className="stats">
            <div className="stat-item"> <Facebook01Icon />118.2k</div>
            <div className="stat-item"> <InstagramIcon />85.4k</div>
            <div className="stat-item"> <Linkedin01Icon />30.2k</div>
            <div className="stat-item"> <ThreadsIcon />29.1k</div>
            <div className="stat-item"> <YoutubeIcon />New</div>
          </div> */}

          <div className="stats">
            <div className="stat-item"> 118.2k</div>
            <div className="stat-item"> 85.4k</div>
            <div className="stat-item"> 30.2k</div>
            <div className="stat-item"> 29.1k</div>
            <div className="stat-item">New</div>
          </div>

        </main >

      </div >

      <DesignSystemSection />
      <Projects />
    </>
  )
}

export default App
