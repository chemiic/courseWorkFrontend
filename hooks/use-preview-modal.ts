import {create} from "zustand";
import {Product} from "@/types/types";

interface UsePreviewModalStore {
    isOpen: boolean;
    product: Product | undefined;
    onOpen: (product: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<UsePreviewModalStore>(set => ({
    isOpen: false,
    product: undefined,
    onOpen: (product: Product) => set({product, isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default usePreviewModal;
