'use client'
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import {Product} from "../../../types/types";
import {type FC, useState, SetStateAction} from 'react';

interface TableProps {
    products: Product[];
}

const Table: FC<TableProps> = ({products}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [PageSize, setPageSize] = useState(10);

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    };


    return (
        <>
            <TableHeader/>
            <TableBody products={currentTableData()}/>
            <TableFooter
                currentPage={currentPage}
                totalCount={products.length}
                pageSize={PageSize}
                setPageSize={setPageSize}
                onPageChange={(page: SetStateAction<number>) => {setCurrentPage(page)}}
            />

        </>
    )
}
export default Table