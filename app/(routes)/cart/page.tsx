"use client";

import {NextPage} from "next";
import {useEffect, useState} from "react";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import CardProduct from "@/app/(routes)/cart/components/CardProduct";
import Summary from "@/app/(routes)/cart/components/summary";

const CartPage: NextPage = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="">Shopping cart</h1>
                    <div className="mt-12 lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg6:col-span-7">
                            {cart.products.length === 0 && <p className="text-neutral-500">No products added to cart, go <Link href={"/"}>back</Link></p>}
                            <ul className="">
                                {cart.products.map(product => (
                                    <CardProduct key={product.id} product={product} />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;
