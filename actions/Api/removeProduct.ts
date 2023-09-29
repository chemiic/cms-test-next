import axios from 'axios'


const removeProduct =  async (id:string) => {
    try {
        const res  = await axios.delete(`https://marshy-foamy-fenugreek.glitch.me/api/goods/${id}`);
        return {type: 'response', res: res.status}
    } catch (e) {
        return {type: 'error', res: e}
    }
}
export default removeProduct;
