import useScrollGrow from '@/Hooks/UseScroll';
import { motion } from 'framer-motion';
import chip from '../../assets/images/chip.jpg';

const ChipReplacement = () => {
    const { commonRef, style } = useScrollGrow(-1000);

    return (
        <motion.div
            className="bg-light-gray rounded-2xl col-span-12 lg:col-span-5 relative overflow-hidden"
            ref={commonRef}
            style={style}
        >
            {/* Background image with opacity */}
            <div className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${chip})` }}
            ></div>

            {/* Content */}
            <div className="relative p-6 h-full z-10 flex flex-col justify-center">
                <h1 className="text-[20px] lg:text-[24px] font-semibold text-center lg:text-left">Chip Replacement</h1>
                <p className="text-[24px] lg:text-[36px] max-w-[20ch] mt-6 lg:mt-[13%] text-center lg:text-left">
                    There is no need to replace the motherboard for a tiny little dead chipset.
                </p>
            </div>
        </motion.div>
    );
};

export default ChipReplacement;
