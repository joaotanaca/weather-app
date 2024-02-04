import React, { ButtonHTMLAttributes } from "react";
import colors from "@/constants/colors/button";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: keyof typeof colors;
};

const Button = ({
    color = "primary",
    className,
    children,
    ...props
}: Props) => {
    return (
        <button
            className={`min-w-[92px] rounded-[4px] py-[10px] px-4 flex justify-center items-center disabled:bg-neutral-200 disabled:text-neutral-700 disabled:border-neutral-700 disabled:cursor-not-allowed transition-all ${colors[color]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
