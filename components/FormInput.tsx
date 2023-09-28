import {FC, forwardRef, InputHTMLAttributes} from "react";
import {ButtonProps} from "./BaseButton";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    labelText: string,
    inputId: string,
}

const formInput:FC<inputProps> = (({labelText,
                                  inputId,
                                  ...props
} ) => {
    return (
        <div className="flex flex-col gap-2 max-w-[250px]">
            <label htmlFor={inputId} className={'pl-2 font-semibold text-[#6e6893] uppercase'}>{labelText}</label>
            <input
                id={inputId}
                className={'w-[230px] text-[#6e6893] border-none rounded bg-[#f4f2ff] h-[40px] outline-none px-2'}
                {...props}
            />
        </div>
    )
})
export default formInput;