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
                return toast("Товар уже в корзине!");
            }

            set({ products: [...get().products, product] });
            toast.success("Товар добавлен в корзину.");
        },
        removeProduct: (id: string): void => {
            set({ products: [...get().products.filter(item => item.id !== id)] });
            toast.success("Товар удален из корзины.");
        },
        removeAll: (): void => {
            set({ products: [] });
            toast.success("Все товары удалены из корзины.");
        },
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
);

export default useCart;
