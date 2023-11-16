import {type FC, MouseEventHandler} from 'react';
import {cn} from "@/lib/utils";

interface IconButtonpProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

const IconButton: FC<IconButtonpProps> = ({className, onClick, icon}) => {
    return (
        <button
            className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-2 hover:scale-110 transition", className)}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default IconButton;
