
import * as React from "react";
import { SVGMotionProps, motion} from "framer-motion";
import {Dispatch, FC, SetStateAction} from "react";
const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);
interface MenuToggleProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const MenuToggle:FC<MenuToggleProps> = ({isOpen, setIsOpen}) => (
    <button onClick={(()=>{setIsOpen(!isOpen)})} className={`absolute top-[14px] sm:top-[27px] z-50 right-4 sm:right-6 w-[23px] h-[23px] lg:hidden`}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);
export default MenuToggle;
