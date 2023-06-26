import { SelectedPageType } from '@/shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: React.ReactNode
    setSelectedPage: (value:SelectedPageType) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink 
    className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer' 
    onClick={() => setSelectedPage(SelectedPageType.ContuctUs)}
    href={`#${SelectedPageType.ContuctUs}`}
    >{children}</AnchorLink>
  )
}

export default ActionButton