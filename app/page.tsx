import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import Style from "@/components/Style"
import Timeline from "@/components/Timeline"
import Social from "@/components/Social"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Style />
      <Timeline />
      <Social />
      <Contact />
      <Footer />
    </main>
  )
}
