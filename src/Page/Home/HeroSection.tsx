import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import macbook from '../../assets/images/macbook-exposed.png'
import { motion, Variants } from "framer-motion"

const intro: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 1, staggerChildren: 0.25 } },
}

const childIntro: Variants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", bounce: 0.5 } }
}

const photoIntro: Variants = {
    hidden: { y: 0, rotate: 0, scale: 0 },
    visible: {
        y: 20,
        rotate: -35,
        scale: 0.97,
        transition: {
            duration: 1,
            y: {
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
                ease: 'easeInOut'
            }
        }
    }
}

const HeroSection = () => {
    return (
        <div className="overflow-hidden">
            <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
                <motion.div variants={intro} initial='hidden' animate='visible'>
                    <motion.h1 variants={childIntro} className="text-4xl lg:text-8xl font-bold text-gray">Don't worry,</motion.h1>
                    <br />
                    <motion.h1 variants={childIntro} className="text-4xl lg:text-8xl font-bold">We'll fix it.</motion.h1>

                    <motion.p variants={childIntro} className="text-lg lg:text-xl text-dark-gray mt-10 mb-5 max-w-[40ch]">Welcome to <span className="text-black font-semibold">iRepair</span>, your one-stop place for all kinds of <span className="text-black font-semibold">Macbook repairs</span> and diagnostics</motion.p>
                    <motion.div variants={childIntro}>
                        <Button>Book a service</Button>
                    </motion.div>

                </motion.div>
                <motion.div variants={photoIntro} initial='hidden' animate='visible' className="mt-10 w-3/4 lg:w-full">
                    <img className=" h-[95%] object-contain" src={macbook} alt="macbook" />
                </motion.div>
            </Container>
        </div>
    );
};

export default HeroSection;