import useScrollGrow from '@/Hooks/UseScroll';
import { motion } from 'framer-motion';

const DataRecovery = () => {
    const { commonRef, style } = useScrollGrow(1000);

    return (
        <motion.div
            className="bg-light-gray rounded-2xl col-span-12 lg:col-span-7 h-auto lg:h-[415px]"
            ref={commonRef}
            style={style}
        >
            <div className="p-6 h-full z-10 flex flex-col justify-center">
                <h1 className="text-[20px] lg:text-[24px] font-semibold text-center lg:text-left">
                    Data Recovery
                </h1>
                <p className="text-[24px] lg:text-[36px] mt-6 lg:mt-[8%] text-center lg:text-left leading-snug">
                    Lost your old memories? <br />
                    Lost your project? <br />
                    Don’t worry, we will recover it <br /> for you.
                </p>
            </div>
        </motion.div>
    );
};

export default DataRecovery;
