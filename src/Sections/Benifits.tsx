import Htext from '@/components/Htext'
import { BenifitType, SelectedPageType } from '@/shared/types'
import { motion } from 'framer-motion'
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";

import BenifitCards from '@/components/BenifitCards';
import ActionButton from '@/components/ActionButton';

type Props = {
    setSelectedPage: (data:SelectedPageType) => void
}

const benefits: BenifitType[] = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];


const Benifits = ({setSelectedPage}: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPageType.Benifits)}  
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        }}>
    {/* heading */}
    <motion.div className='className="md:my-5 md:w-3/5'>
    <Htext>MORE THAN JUST GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
    </motion.div>

    {/* benifits cards */}

    <div className='mt-5 items-center justify-between gap-8 md:flex'>
       { benefits.map((benifit:BenifitType) => (<BenifitCards key={benifit.title} benifits={benifit} setSelectedPage={setSelectedPage}></BenifitCards>))}
    </div>

    {/* Image and description */}

    <div className='mt-16 gap-8 items-center justify-between md:flex'>
      {/* image */}
      <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
      {/* description */}
      <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>

        {/* title */}
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
            <div className="relative">
            <Htext>Millions OF HAPPY MEMBERS GETTING FIT{' '}<span className='text-primary-300'>FIT</span></Htext>
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tenetur consectetur cumque deserunt reprehenderit odit unde reiciendis. Ratione, iusto cupiditate atque explicabo magnam molestias dolores quam totam ex? Temporibus voluptas amet eum excepturi ut numquam et. Voluptates at assumenda unde pariatur iure, officiis sit quisquam amet recusandae ipsum mollitia! Tempora?</p>
          <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio culpa voluptate magnam nostrum, quod eligendi. Nesciunt sed consequuntur inventore veniam est, corporis ipsa ab ex, dignissimos magni omnis consectetur?</p>
        </div>
        {/* button */}
        <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>

      </motion.div>
    </div>

    </motion.div>
 
    </section>
    
  )
}

export default Benifits