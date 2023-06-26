
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPageType } from "@/shared/types";
import ActionButton from "@/components/ActionButton";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (data:SelectedPageType) => void
}

const Home = ({setSelectedPage}: Props) => {

const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id='home' className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
    {/* header */}
    <motion.div className="md:flex mx-auto w-5/6 items-center justify-center" onViewportEnter={() => setSelectedPage(SelectedPageType.Home)}>
        {/* header text */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* text */}
            <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className="relative">
                    <div className="before:absolute before:-mt-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                        <img alt="home-page-text" src={HomePageText}></img>
                    </div>
                </div>
            
                <p className="mt-8 text-sm md:w-5/6">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                Studios to get the Body Shapes That you Dream of.. Get Your Dream
                Body Now.
                </p>
            </motion.div>
            {/* action button */}
            <motion.div className="mt-8 flex items-center gap-8" 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.5, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
            >
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                <AnchorLink className="text-sm cursor-pointer text-primary-500 underline" href={`#${SelectedPageType.ContuctUs}`} onClick={() => setSelectedPage(SelectedPageType.ContuctUs)}>Contact Us</AnchorLink>
            </motion.div>
        </div>

        {/* header image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
    </motion.div>

    {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 mx-auto">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Home