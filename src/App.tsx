import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { SelectedPageType } from "./shared/types"
import Home from "./Sections/Home"


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
    
      <div>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} topOfPage={topOfPage}></Navbar>
        <Home setSelectedPage={setSelectedPage}></Home>
      </div>
      
  )
}

export default App
