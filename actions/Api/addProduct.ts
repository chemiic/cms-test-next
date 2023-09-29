import axios, {AxiosError} from "axios";
import {Product} from "../../types/types";

type addProductProps = Omit<Product, 'id'>
const addProduct =  async (product:addProductProps) => {
    try {
        const res  = await axios.post(`https://marshy-foamy-fenugreek.glitch.me/api/goods`, product);
        return {type: 'response', res: res.status}
    } catch (error) {
        return {type: 'error', res: error}
    }
}
export default addProduct;
