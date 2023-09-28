'use client'
import {Product} from "../../../types/types";
import TableItem from "./TableItem";
import {FC} from "react";

interface TableBodyProps {
    products: Product[];
}
const TableBody: FC<TableBodyProps> =  ({products}) => {

    return (
        <table className={`border-collapse text-center w-full shadow-md`}>
            <thead className="bg-[#f4f2ff] h-3 text-[#6e6893]">
            <tr className={`text-left h-[60px]`}>
                <th scope="col" className={`px-3`}>ID</th>
                <th scope="col">Наименование</th>
                <th scope="col">Категория</th>
                <th scope="col">ЕД/ИЗМ</th>
                <th scope="col">Количество</th>
                <th scope="col">Цена</th>
                <th scope="col">Итог</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {products.map((product: Product) => (
                <TableItem key={product.id} product={product}/>
            ))}
            </tbody>
        </table>
    )
};
export default TableBody