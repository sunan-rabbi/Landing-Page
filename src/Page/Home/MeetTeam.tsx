import Container from "@/components/Container/Container";
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import p1 from '../../assets/images/person/person-1.png';
import p2 from '../../assets/images/person/person-2.png';
import p3 from '../../assets/images/person/person-3.png';
import p4 from '../../assets/images/person/person-4.png';
import { useEffect, useRef } from "react";

const fadeIn: Variants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.8, staggerChildren: 0.25 } }
};

const childFadeIn1: Variants = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
}
const childFadeIn2: Variants = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
}

const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
};



const MeetTeam = () => {

    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    return (
        <div className="bg-light-gray py-16 my-20 overflow-hidden" ref={ref}>
            <Container>
                {/* Title Section */}
                <motion.div
                    className="text-center"
                    initial='hidden'
                    variants={fadeIn}
                    animate={controls}
                >
                    <motion.h1 variants={childFadeIn1} className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold">
                        Meet Our <span className="text-primary">Team</span>
                    </motion.h1>
                    <motion.p variants={childFadeIn2} className="text-[16px] md:text-[18px] mt-4 max-w-[70ch] mx-auto">
                        All our technicians are fully qualified and licensed. Moreover, they are incredibly skillful
                        and proficient in various aspects of computer repair.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-16">

                    <motion.img
                        whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0.2 } }}
                        animate={{ scale: 1, transition: { duration: 0.3 } }}
                        className="w-full h-auto max-w-[285px] rounded-lg mx-auto z-10"
                        src={p1}
                        alt="Person 1"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUp}
                        exit={{ scale: 1, transition: { duration: 0.2 } }}
                    />

                    <motion.img
                        whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0.2 } }}
                        animate={{ scale: 1, transition: { duration: 0.3 } }}
                        className="w-full h-auto max-w-[285px] rounded-lg mx-auto"
                        src={p2}
                        alt="Person 2"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUp}
                    />
                    <motion.img
                        whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0.2 } }}
                        animate={{ scale: 1, transition: { duration: 0.3 } }}
                        className="w-full h-auto max-w-[285px] rounded-lg mx-auto"
                        src={p3}
                        alt="Person 3"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUp}
                    />
                    <motion.img
                        whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0.2 } }}
                        animate={{ scale: 1, transition: { duration: 0.3 } }}
                        className="w-full h-auto max-w-[285px] rounded-lg mx-auto"
                        src={p4}
                        alt="Person 4"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUp}
                    />
                </div>
            </Container>
        </div>
    );
};

export default MeetTeam;
