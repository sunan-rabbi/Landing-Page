import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const useScrollGrow = (position: number) => {

    const commonRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: commonRef,
        offset: ['0 1', '1.3 1']
    })
    const scaleValues = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1])
    const positionValues = useTransform(scrollYProgress, [0, 1], [position, 1])

    const style: any = {
        scale: scaleValues,
        opacity: opacityValues,
        x: positionValues
    }

    return { commonRef, style }

};

export default useScrollGrow;