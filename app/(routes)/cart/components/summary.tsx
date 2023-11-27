"use client";

import {FC, useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";

const Summary: FC = () => {
    const searchParams = useSearchParams();
    const products = useCart((state) => state.products);
    const removeAll = useCart((state) => state.removeAll);
    const router = useRouter()
    useEffect((): void => {
        if (searchParams.get('success')) {
            toast.success('Payment completed.');
            removeAll();
        }

        if (searchParams.get('canceled')) {
            toast.error('Something went wrong.');
        }
    }, [searchParams, removeAll]);

    const totalPrice: number = products.reduce((total, product) => {
        return total + Number(product.price)
    }, 0);

    const onCheckout = async () => {
        router.push('/checkout')
    }

    return (
        <motion.div
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 2
            }}>
            <h2 className="text-lg font-medium text-gray-900">
                Стоимость заказа
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">Итог</div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button onClick={onCheckout} disabled={products.length === 0} className="w-full mt-6 font-medium ">
                Заказать
            </Button>
        </motion.div>
    );
}

export default Summary;
