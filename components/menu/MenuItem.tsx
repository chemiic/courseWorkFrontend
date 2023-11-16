'use client'

import React, {FC, useContext} from 'react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {MenuStateContext} from "@/components/menu/NavMenu";
interface SidebarItemProps {
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, active, href}) => {

    const {isOpen, setIsOpen} = useContext(MenuStateContext);

    return (
            <Link
                href={href}
                className={twMerge(`
                    flex
                    flex-row
                    h-auto
                    items-center
                    w-full
                    cursor-pointer
                    gap-x-4
                    font-semibold
                    text-md
                    text-neutral-500    
                    lg:text-md
                    lg:text-neutral-700
                    lg:hover:text-[#9E00FF]
                    transition
                    py-1
                `,
                    active && "text-black lg:text-[#9E00FF]"
                )}
                onClick={(()=> setIsOpen(false))}
            >
                <p className="truncate w-full">{label}</p>
            </Link>
    );
};

export default SidebarItem;