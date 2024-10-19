import useScrollGrow from '@/Hooks/UseScroll';
import { motion } from 'framer-motion';

const Delivery = () => {
    const { commonRef, style } = useScrollGrow(-1000);

    return (
        <motion.div
            className="bg-light-gray rounded-2xl col-span-6 lg:col-span-4 p-6 h-auto lg:h-[415px] flex items-center justify-center"
            ref={commonRef}
            style={style}
        >
            <p className="text-[36px] md:text-[60px] lg:text-[80px] font-semibold text-center leading-tight">
                Same Day <span className="text-primary">Delivery</span>
            </p>
        </motion.div>
    );
};

export default Delivery;
