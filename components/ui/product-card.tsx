"use client";

import {type FC, MouseEventHandler} from 'react';
import {Product} from "@/types/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import {BiExpand} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import Currency from "@/components/ui/currency";
import {useRouter} from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    const router = useRouter();

    const previewModal = usePreviewModal();
    const cart = useCart();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e): void => {
        e.stopPropagation();
        previewModal.onOpen(product);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e): void => {
        e.stopPropagation();
        cart.addProduct(product);
    };

    const handleClick = (): void => {
        router.push(`/product/${product.id}`);
    };

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={product?.images?.[0]?.url}
                    alt="Image"
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<BiExpand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<FaShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <p className="font-semibold text-lg">
                    {product.name}
                </p>
                <p className="text-sm text-gray-500">
                    {product.category.name}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={product.price} />
            </div>
        </div>
    );
};

export default ProductCard;
