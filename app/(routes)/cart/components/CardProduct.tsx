"use client";

import {type FC} from 'react';
import {Product} from "@/types/types";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import {IoClose} from "react-icons/io5";
import Currency from "@/components/ui/currency";
import {useRouter} from "next/navigation";

interface CardProductProps {
    product: Product;
}

const CardProduct: FC<CardProductProps> = ({product}) => {
    const cart = useCart();
    const router = useRouter();

    const onRemove = (): void => {
        cart.removeProduct(product.id);
    };

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    onClick={() => router.push(`/product/${product.id}`)}
                    src={product.images[0].url}
                    alt="Image"
                    fill
                    className="object-cover object-center cursor-pointer" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<IoClose size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {product.name}
                        </p>
                    </div>
                    <div className="mt-1 flex gap-x-3 text-sm">
                        <p className="text-gray-500">
                            {product.color.name}
                        </p>
                        <p className="text-gray-500 ,l-4 border-l border-gray-200 pl-4">
                            {product.size.name}
                        </p>
                    </div>
                    <p onClick={() => router.push(`/category/${product.category.id}`)} className="text-gray-500 cursor-pointer">
                        {product.category.name}
                    </p>
                    <Currency value={product.price} />
                </div>
            </div>
        </li>
    );
};

export default CardProduct;
