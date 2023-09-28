import {FC} from "react";
import {Product} from "../../types/types";
import countTotalPrice from "../../actions/countTotalPrice";


interface HeaderProps{
    products: Product[];
}
const Header:FC<HeaderProps> = ({products}) => {

    return(
        <header className={`flex justify-between py-4 mb-4 border-b border-solid border-[#C6C2DE]`}>
            <h1 className={`text-[#6E6893] font-bold text-xl`}>CMS</h1>
            <p>Итоговая стоимость: <span className={`text-[#6D5BD0] text-lg font-bold`}>$ {countTotalPrice(products)}</span> </p>
        </header>
    )
}
export default Header