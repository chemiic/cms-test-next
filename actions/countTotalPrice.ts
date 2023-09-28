import {Product} from "../types/types";


const countTotalPrice = (products: Product[]) => {
    return products.reduce((acc, item) => item.discount==0 ? acc + (item.price * item.count) : acc +
        ((item.price * item.discount) - (item.price * item.count) * (item.discount / 100)), 0)
}
export default countTotalPrice