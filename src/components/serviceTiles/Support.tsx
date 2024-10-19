import useScrollGrow from '@/Hooks/UseScroll';
import { motion } from 'framer-motion';

const Support = () => {
    const { commonRef, style } = useScrollGrow(1000);

    return (
        <motion.div
            className="bg-light-gray rounded-2xl col-span-12 md:col-span-12 lg:col-span-4 p-6 h-auto lg:h-[415px] flex items-center justify-center"
            ref={commonRef}
            style={style}
        >
            <p className="text-[36px] md:text-[60px] lg:text-[80px] font-semibold text-center leading-tight">
                Remote <span className="text-primary">Support</span> Service
            </p>
        </motion.div>
    );
};

export default Support;
