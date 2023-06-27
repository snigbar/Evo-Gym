import { BenifitType, SelectedPageType } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    benifits: BenifitType
    setSelectedPage: (data:SelectedPageType) => void
}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

const BenifitCards = ({benifits, setSelectedPage}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md px-5 py-16 text-center drop-shadow shadow-xl antialiased"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-primary-100 p-4">
          {benifits.icon}
        </div>
      </div>

      <h4 className="font-bold">{benifits.title}</h4>
      <p className="my-3">{benifits.description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPageType.ContuctUs)}
        href={`#${SelectedPageType.ContuctUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default BenifitCards