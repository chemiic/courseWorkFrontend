'use client'
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const totalPrice = ()   =>{
const products = useCart((state) => state.products);
const totalPrice: number = products.reduce((total, product) => {
    return total + Number(product.price)
}, 0);
    return(
        <div className=" space-y-4">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="text-base font-medium text-gray-900">Итог</div>
                <Currency value={totalPrice} />
            </div>
        </div>
    )
}
export default totalPrice;