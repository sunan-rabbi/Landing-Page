import useScrollGrow from '@/Hooks/UseScroll';
import { motion } from 'framer-motion';

const Free = () => {
    const { commonRef, style } = useScrollGrow(-1000);

    return (
        <motion.div
            className="bg-light-gray rounded-2xl col-span-6 lg:col-span-4 p-6 h-auto lg:h-[415px] flex items-center justify-center"
            ref={commonRef}
            style={style}
        >
            <div className="text-center leading-tight">
                <p className="text-primary text-[36px] md:text-[60px] lg:text-[80px] font-semibold">
                    Free
                </p>
                <p className="text-[36px] md:text-[60px] lg:text-[80px] font-semibold">
                    Diagno <br /> stics
                </p>
            </div>
        </motion.div>
    );
};

export default Free;
