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