"use client";

import {type FC, MouseEventHandler} from 'react';
import {Product} from "@/types/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import {FaShoppingCart} from "react-icons/fa";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";

interface InfoProps {
    product: Product;
}

const Info: FC<InfoProps> = ({product}) => {
    const cart = useCart();

    const previewModal = usePreviewModal();
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e): void => {
        e.stopPropagation();
        previewModal.onClose()
        cart.addProduct(product);
    };

    return (
        <div className="mt-6 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-3 flex items-end justify-between text-2xl text-gray-900">
                <Currency value={product.price} />
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Форм-фатор:
                    </h3>
                    <div>
                        {product.form_factor}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Цвет:
                    </h3>
                    <div>
                        {product.color}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Категория:
                    </h3>
                    <div>
                        {product.category}
                    </div>
                </div>
                <div className="mt-10 flex items-center gap-x-3">
                    <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
                        Добавить в корзину
                        <FaShoppingCart size={20} className="text-white"/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Info;
