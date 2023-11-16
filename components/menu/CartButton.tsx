"use client";

import {type FC, useEffect, useState} from 'react';
import Button from "@/components/ui/button";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import {useRouter} from "next/navigation";
import useCart from "@/hooks/use-cart";

const CartButton: FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <Button className="flex items-center rounded-full bg-black px-4 py-2" onClick={() => router.push("/cart")}>
            <FaShoppingCart size={20} className="text-white"/>
            <span className="ml-2 text-sm font-medium text-white">{cart.products.length > 9? "9+" : cart.products.length}</span>
        </Button>
    );
};

export default CartButton;
