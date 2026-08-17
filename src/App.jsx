import Nav from './components/Nav'
import AnnouncementBar from './components/AnnouncementBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Awards from './components/Awards'
import Screenshots from './components/Screenshots'
import HowToPlay from './components/HowToPlay'
import MerchCTA from './components/MerchCTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* 1. Top Navigation Bar */}
      <Nav />

      {/* 2. Announcement / Marquee Bar */}
      <AnnouncementBar />

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Intro Statement Section */}
      <Intro />

      {/* 5. The Crew — Team Section */}
      <Awards />

      {/* 6. How to Play (+ Crew & Impostor) */}
      <HowToPlay />

      {/* 7. Gameplay Screenshots */}
      <Screenshots />

      {/* 8. Footer Merch CTA */}
      <MerchCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
