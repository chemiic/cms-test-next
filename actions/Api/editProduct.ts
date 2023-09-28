import axios from "axios";
import {Product} from "../../types/types";



const editProduct = async (product:Product) => {
    try {
        const res  = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL + '/' + product.id}`, product);
        return {type: 'response', res: res.status}
    } catch (error) {
        return {type: 'error', res: error}
    }
}
export default editProduct;