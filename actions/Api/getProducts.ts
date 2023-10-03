import axios from 'axios'
const getProducts =  async () => {
    try {
        const res  = await axios.get(`https://marshy-foamy-fenugreek.glitch.me/api/goods`);
        return res.data;
    } catch (e) {
        return  [{
            id: 'Ошибка загрузки',
            title: 'Ошибка загрузки',
            description: 'Ошибка загрузки',
            category: 'Ошибка загрузки',
            price: 0,
            units: 'Ошибка загрузки',
            count: 0,
            discount: 0,
            image: ''
        }]
    }
}
export default getProducts;
