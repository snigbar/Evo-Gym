
import { SelectedPageProps, SelectedPageType } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string
} & SelectedPageProps

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPageType
  return (
    <AnchorLink 
    className={`${selectedPage == lowerCasePage?'text-primary-500': ''} transtion duration-500 hover:text-primary-500`}
    href={`#${lowerCasePage}`}
    onClick={()=> setSelectedPage(lowerCasePage)}
    >
    {page}
    </AnchorLink>
  )
}

export default Link