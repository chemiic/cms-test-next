'use client'
import {useError} from "../hooks/useError";

const ErrorPopup = () => {
    const {isOpen, onClose, data} = useError();
    return (
        <div className={`z-55 fixed h-full top-0 bottom-0 left-0 right-0  items-center justify-center  ${isOpen ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col justify-center items-center bg-[#F2F0F9] w-[320px] h-[320px] p-10 relative">
                <button className="right-5 top-5 absolute"
                    onClick={(e)=>{onClose()}}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#6E6893" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M2 22L22 2" stroke="#6E6893" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </button>

                <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L92 92" stroke="#D80101" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M2 92L92 2" stroke="#D80101" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <p className={'mt-7'}>{data}</p>
            </div>
        </div>
    )
};
export default ErrorPopup;