import React, {type FC} from 'react';
import {cn} from "@/lib/utils";

interface ContainerProps extends React.BaseHTMLAttributes<HTMLBaseElement>{
    className?: string,
    children: React.ReactNode;
}


const Container: FC<ContainerProps> = ({className,children}) => {
    return (
        <div className={cn(`mx-auto max-w-7xl`, className)}>
            {children}
        </div>
    );
};

export default Container;
