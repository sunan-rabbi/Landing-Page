import { Variants, motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import laptop from '../../assets/images/macbook.jpg'

const AboutSection = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const intro: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 1, staggerChildren: 0.25 } },
    };

    const childIntro: Variants = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.5 } },
    };

    const photoIntro: Variants = {
        hidden: { y: 0, opacity: 0.5, x: -550 },
        visible: {
            y: 10,
            x: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
                y: {
                    repeat: Infinity,
                    duration: 1,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                },
            },
        },
    };

    return (
        <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 lg:mt-36 mb-40 lg:mr-40"
        >
            <motion.div
                variants={photoIntro}
                initial="hidden"
                animate={controls}
                className="w-3/4 lg:w-[708px]"
            >
                <img className="h-[6%]" src={laptop} alt="Laptop" />
            </motion.div>
            <motion.div
                variants={intro}
                initial="hidden"
                animate={controls}
                className="px-[20px] mt-10 lg:mt-0"
            >
                <motion.h1 variants={childIntro} className="text-3xl lg:text-6xl font-semibold">
                    Who we are
                </motion.h1>
                <motion.p
                    variants={childIntro}
                    className="text-gray my-8 lg:my-10"
                >
                    At <span className="text-black font-semibold">iRepair</span>, we love MacBooks as much as you do. That’s why we offer fast, reliable, and affordable repair services for all kinds of MacBooks. Whether you need a screen replacement, a battery upgrade, or a software fix, we have the skills and experience to get your MacBook back to its best. We serve both individuals and businesses in{' '}
                    <span className="text-black font-semibold">Bangladesh</span>, and we guarantee your satisfaction. Don’t let a broken MacBook ruin your day. Contact iRepair today and let us take care of it.
                </motion.p>
                <motion.div
                    variants={childIntro}
                    className="flex justify-between items-center pr-5"
                >
                    <motion.div className="flex justify-between items-center flex-col">
                        <h1 className="text-5xl lg:text-[128px] text-primary">98%</h1>
                        <p className="text-sm lg:text-lg font-semibold mt-10">Successful repair</p>
                    </motion.div>
                    <motion.div className="flex justify-around lg:justify-between items-center flex-col">
                        <h1 className="text-5xl lg:text-[128px] text-primary">2k+</h1>
                        <p className="text-sm lg:text-lg font-semibold mt-10">Successful repair</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutSection;
