import useScrollGrow from '@/Hooks/UseScroll';
import { motion } from 'framer-motion';
import store from '../../assets/images/harddrivecable.png';

const StorageReplacement = () => {
    const { commonRef, style } = useScrollGrow(1000);

    return (
        <motion.div
            ref={commonRef}
            className="bg-light-gray rounded-2xl col-span-12 h-auto lg:h-[415px] overflow-hidden"
            style={style}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                {/* Text section */}
                <div className="px-6 pt-6 lg:w-1/2 w-full text-center lg:text-left">
                    <h1 className="font-semibold text-xl lg:text-2xl">Storage Replacement</h1>
                    <p className="text-2xl lg:text-3xl leading-snug mt-6 lg:mt-[20%]">
                        Get rid of your slow HDD, <br />
                        upgrade to super fast SSD with ease.
                    </p>
                </div>

                {/* Image section */}
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <img className="w-full h-auto object-cover" src={store} alt="Hard drive" />
                </div>
            </div>
        </motion.div>
    );
};

export default StorageReplacement;
