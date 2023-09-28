import {create} from "zustand";

interface errorStore{
    data: string;
    isOpen: boolean
    onOpen: (data:string) => void;
    onClose: () => void;
}
export const useError = create<errorStore>((set)=> ({
    isOpen: false,
    data: '',
    onOpen: (data:string) => set({isOpen: true, data: data}),
    onClose: () => set({isOpen: false, data:''}),
}))