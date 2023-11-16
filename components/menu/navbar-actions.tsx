import {type FC, useEffect, useState} from 'react';
import Button from "@/components/ui/button";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import useCart from "@/hooks/use-cart";
import {useRouter} from "next/navigation";
import CartButton from "@/components/menu/CartButton";
import AuthButton from "@/components/menu/AuthButton";

const NavbarActions: FC = () => {

    return (
        <div className="ml-auto flex items-center gap-x-4 mr-10 lg:mr-0">
            <CartButton/>
            <AuthButton/>
        </div>
    );
};

export default NavbarActions;
