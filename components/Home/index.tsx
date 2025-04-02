import AboutUs from "../about"
import Awards from "../Awards"
import Contact from "../contact"
import ExpertiseSec from "../expertise"
import Header from "../header"
import Hero from "../header/hero"
import Work from "../work"

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
