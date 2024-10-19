import useScrollGrow from "@/Hooks/UseScroll";
import { motion } from "framer-motion";
import pad from '../../assets/images/trackpad.png'

const BatteryReplacement = () => {
    const { style, commonRef } = useScrollGrow(-1000);

    return (
        <motion.div
            ref={commonRef}
            className="bg-light-gray rounded-2xl col-span-12 overflow-hidden"
            style={style}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                {/* Text section */}
                <div className="px-6 pt-6 lg:w-1/2 w-full text-center lg:text-left">
                    <h1 className="font-semibold text-xl lg:text-2xl">Battery Replacement</h1>
                    <p className="text-2xl lg:text-3xl leading-snug mt-6 lg:mt-[20%]">
                        Get back to 100% battery health. <br />
                        With 6-month replacement warranty.
                    </p>
                </div>

                {/* Image section */}
                <div className="w-full lg:w-1/2">
                    <img className="w-full h-auto object-cover" src={pad} alt="Track pad" />
                </div>
            </div>
        </motion.div>
    );
};

export default BatteryReplacement;
