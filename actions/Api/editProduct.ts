import axios from "axios";
import {Product} from "../../types/types";



const editProduct = async (product:Product) => {
    try {
        const res  = await axios.patch(`https://marshy-foamy-fenugreek.glitch.me/api/goods/${product.id}`, product);
        return {type: 'response', res: res.status}
    } catch (error) {
        return {type: 'error', res: error}
    }
}
export default editProduct;
