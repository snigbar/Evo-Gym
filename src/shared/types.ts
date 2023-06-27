export type SelectedPageProps = {
    topOfPage?: boolean
    selectedPage: SelectedPageType
    setSelectedPage: (value:SelectedPageType) => void
  }
  
  export enum SelectedPageType {
    Home = 'home',
    Benifits = 'benifits',
    OurClasses = 'ourclasses',
    ContuctUs = 'contactus',
  }

  export interface BenifitType {
    icon: JSX.Element
    title: string
    description: string
  }

  export interface ClassType {
    name: string
    description:string
    image: string
  }