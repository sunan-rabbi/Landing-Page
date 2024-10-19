import { cn } from "@/lib/utils";
import { ReactNode } from "react";


const Container = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn(`w-full h-full max-w-[1240px] px-[20px] mx-auto`, className)}>
            {children}
        </div>
    );
};

export default Container;