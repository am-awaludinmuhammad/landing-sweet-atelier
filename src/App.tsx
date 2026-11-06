import { AnnouncementBar } from './components/AnnouncementBar'
import { Header } from './components/Header'
import { DesktopNav } from './components/DesktopNav'
import { HeroSection } from './components/HeroSection'
import { ShopSection } from './components/ShopSection'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <AnnouncementBar />
      <Header />
      <DesktopNav />
      <section id="home">
        <HeroSection />
      </section>
      <section id="shop">
        <ShopSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <Footer />
    </div>
  )
}

export default App
