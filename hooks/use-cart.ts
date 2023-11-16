import {create} from "zustand";
import {Product} from "@/types/types";
import {persist, createJSONStorage} from "zustand/middleware";
import toast from "react-hot-toast";

interface useCartStore {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<useCartStore>((set, get)=> ({
        products: [],
        addProduct: (product: Product) => {
            const currentProducts = get().products;
            const existingProduct = currentProducts.find(item => item.id === product.id);

            if (existingProduct) {
                return toast("Product already in cart!");
            }

            set({ products: [...get().products, product] });
            toast.success("Product added to cart.");
        },
        removeProduct: (id: string): void => {
            set({ products: [...get().products.filter(item => item.id !== id)] });
            toast.success("Product removed from the cart.");
        },
        removeAll: (): void => {
            set({ products: [] });
            toast.success("All product removed from the cart.");
        },
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
);

export default useCart;
