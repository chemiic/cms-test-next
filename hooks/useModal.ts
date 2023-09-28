import {create} from "zustand";
import {Product} from "../types/types";

export type ModalType = "addModal" | "editModal";

interface ModalStore {
    type: ModalType | null;
    data: Product;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: Product) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {
        id: '',
        title: '',
        description: '',
        category: '',
        price: 0,
        units: 'шт',
        count: 0,
        discount: 0,
        image: ''
    },
    isOpen: false,
    onClose: () => set({type: null, isOpen: false}),
    onOpen: (type: ModalType, data: Product = {
        id: '',
        title: '',
        description: '',
        category: '',
        price: 0,
        units: 'шт',
        count: 0,
        discount: 0,
        image: ''
    }) => {
        set({type, isOpen: true, data})},
}));