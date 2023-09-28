import {forwardRef} from "react";
import {cn} from "@/lib/utils";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
        className,
        children,
        disabled,
        type = "button",
        ...props

    }, ref) => {
    return (
        <button ref={ref} {...props}
            className={cn(`bg-[#6D5BD0] px-5 py-3 text-white text-base uppercase transition rounded-md border-solid border border-[#6D5BD0]
            hover:bg-transparent hover:text-[#6D5BD0]`,className)}>
    {children}
    </button>
)
});

Button.displayName = "Button";

export default Button;