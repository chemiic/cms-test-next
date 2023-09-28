import axios from 'axios'


const removeProduct =  async (id:string) => {
    try {
        const res  = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL + '/' + id}`);
        return {type: 'response', res: res.status}
    } catch (e) {
        return {type: 'error', res: e}
    }
}
export default removeProduct;