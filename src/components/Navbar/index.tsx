import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '@/assets/Logo.png'
import Link from './Link'
import { SelectedPageProps} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import ActionButton from '../ActionButton'





const flexBetweenCenter = 'flex justify-between items-center'

const Navbar = ({topOfPage,selectedPage,setSelectedPage}: SelectedPageProps) => {

    const [menutoggle, setMenutoggle] = useState<boolean>(false)
    const isAboveMedia = useMediaQuery("(min-width:1060px)")
    const navBackground = topOfPage ? "":"bg-primary-100 drop-shadow opacity-95"
    console.log(topOfPage)


  return (
    <nav className={`${navBackground} ${flexBetweenCenter} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetweenCenter} mx-auto w-5/6`}>
            {/* left bar */}
            <div className={`${flexBetweenCenter} w-full gap-16`}>
                <img src={logo} alt="logo"/>
       

            {/* Right bar */}
          { isAboveMedia ? <div className={`${flexBetweenCenter} w-full`}>
                {/* links  */}
                <div className={`${flexBetweenCenter} text-sm gap-8`}>
                <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page='Benifits'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page='Our Classes'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page='Contact Us'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                </div>
                {/* nav end */}

                <div className={`${flexBetweenCenter} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                </div>

                

          </div>
        : <button className='rounded-full bg-secondary-500 p-2' onClick={() => setMenutoggle(!menutoggle)}><Bars3Icon className='h-6 w-6 text-white'></Bars3Icon></button>  
        }
        </div>
          
    </div>
        {/* mobile side menu */}
      { !isAboveMedia && menutoggle && 
       
      <div className='abosolute h-screen'>
      <div className='fixed right-0 bottom-0 z-50 h-screen bg-primary-100 drop-shadow-xl w-[300px]'>

        <div className='flex flex-col gap-4  h-full px-4 py-4 items-center justify-center'>
        <button className='rounded-full p-2 self-end hover:bg-primary-300 hover:text-white' onClick={() => setMenutoggle(!menutoggle)}><XMarkIcon className='h-6 w-6'></XMarkIcon></button> 
       <div className='flex flex-col h-[90%] justify-center items-start gap-4'>
        <Link 
        page='Home'
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        <Link 
        page='Benifits'
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        <Link 
        page='Our Classes'
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        <Link 
        page='Contact Us'
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        </div>
        </div>
        
      </div>
      </div> 

      }
    </nav>
  )
}

export default Navbar