import {Dispatch, FC, SetStateAction} from "react";


interface footerProps{
    currentPage: number;
    totalCount: number;
    pageSize: number;
    setPageSize: Dispatch<SetStateAction<number>>;
    onPageChange: (page: SetStateAction<number>) => void;
}
const TableFooter:FC<footerProps> = ({currentPage,totalCount,pageSize,setPageSize, onPageChange}) => {
    const onNext = () => {
        if (currentPage!=  Math.ceil(totalCount/pageSize)){
            onPageChange(currentPage + 1);
        }
    };
    const onPrevious = () => {
        if (currentPage != 1){
            onPageChange(currentPage - 1);
        }
    };
    return(
        <footer className={'rounded-b-xl bg-[#f4f2ff] p-3 mb-10 flex justify-end gap-10 text-[#6E6893]'}>
            <div>Показывать на странице:
                <input type={'number'}
                       className={'w-10 bg-transparent rounded pl-1'}
                       placeholder={`${pageSize}`}
                       value={pageSize}
                       onChange={(e)=>setPageSize(Number(e.target.value))}
                />
            </div>
            <div>
                {
                    currentPage
                    + ' из ' +
                    Math.ceil(totalCount/pageSize)
                }
            </div>
            <div className={'flex items-center gap-10'}>
                <button className={'cursor-pointer'}
                    onClick={onPrevious}
                >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.79971 1.10636C6.42812 0.51287 5.43313 -0.426818 4.80472 0.216126L0.196378 4.51891C-0.0654595 4.7662 -0.0654595 5.21131 0.196378 5.4586L4.80472 9.81084C5.43313 10.4043 6.42812 9.46464 5.79971 8.87115L1.71504 5.01348L5.79971 1.10636Z" fill="#6E6893"/>
                    </svg>
                </button>

                <button className={'cursor-pointer'}
                    onClick={onNext}
                >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.200293 1.10636C-0.428118 0.51287 0.566865 -0.426818 1.19528 0.216126L5.80362 4.51891C6.06546 4.7662 6.06546 5.21131 5.80362 5.4586L1.19528 9.81084C0.566865 10.4043 -0.428118 9.46464 0.200293 8.87115L4.28496 5.01348L0.200293 1.10636Z" fill="#6E6893"/>
                    </svg>
                </button>
            </div>
        </footer>
    )
}
export default TableFooter