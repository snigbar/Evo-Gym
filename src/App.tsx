import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { SelectedPageType } from "./shared/types"
import Home from "./Sections/Home"
import Benifits from "./Sections/Benifits"
import OurClasses from "./Sections/OurClasses"
import ContactUs from "./Sections/ContactUs"


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPageType>(SelectedPageType.Home)
 
  const [topOfPage, setTopOfPage] = useState<boolean>(true)


  useEffect(()=>{
    const handleScroll = () => { 
      if(window.scrollY === 0) {
      setTopOfPage(true)
      setSelectedPage(SelectedPageType.Home)
    }
    if(window.scrollY !== 0){
      setTopOfPage(false)
    }}
    window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    
      <div className="relative">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} topOfPage={topOfPage}></Navbar>
        <Home setSelectedPage={setSelectedPage}></Home>
        <Benifits setSelectedPage={setSelectedPage}></Benifits>
        <OurClasses setSelectedPage={setSelectedPage}></OurClasses>
        <ContactUs setSelectedPage={setSelectedPage}></ContactUs>
      </div>
      
  )
}

export default App
