import AboutUs from "@/components/about"
import Awards from "@/components/Awards"
import Contact from "@/components/contact"
import ExpertiseSec from "@/components/expertise"
import Header from '@/components/header'
import Hero from '@/components/header/hero'
import Work from '@/components/work/index'

function Home() {
  return (
    <>
    <div className="md:p-7 p-4">
    <Hero/>
      <Header/>
      <AboutUs/>
      <ExpertiseSec/>
      <Work/>
      <Awards/>
      <Contact/>
      </div>
    </>
  )
}

export default Home
