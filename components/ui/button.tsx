import {forwardRef} from "react";
import {cn} from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
   return (
       <button ref={ref} {...props} className={cn(
           `w-auto rounded-full bg-black border-transparent px-5 py-3 
           disabled:cursor-not-allowed disabled:opacity-50 text-white 
           font-medium hover:opacity-75 transition hover:bg-[#9E00FF]`,
           className)}>
           {children}
       </button>
   )
});

Button.displayName = "Button";

export default Button;
