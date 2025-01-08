import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HologramIcon, Home01Icon } from "hugeicons-react";
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
          <h1> <Home01Icon /> Chandrasekhar Baksi is an independent designer based in the Chandigarh. His work is featured by brands such as the New York Times, Adobe, Figma, and others.</h1>
          <p className="text-sm/[16px] ...">
            This is body text. It uses the base font size (16px) with line height and letter spacing applied.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Work with Me</button>
            <button className="btn-secondary">Read more</button>
          </div>

          {/* Social Media Stats */}
          <div className="stats">
            <div className="stat-item">118.2k</div>
            <div className="stat-item">85.4k</div>
            <div className="stat-item">30.2k</div>
            <div className="stat-item">29.1k</div>
          </div>
        </main >

      </div >

      <Projects />
    </>
  )
}

export default App
