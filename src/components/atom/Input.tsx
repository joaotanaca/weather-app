import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string;
    name: string;
    containerClassname?: string;
};

const Input = ({ className, label, containerClassname, ...props }: TProps) => {
    return (
        <div
            className={`flex flex-col gap-2 text-neutral-900  ${containerClassname}`}
        >
            {label ? (
                <label
                    htmlFor={props.name}
                    className="font-semibold dark:text-white"
                >
                    {label}
                </label>
            ) : null}
            <input
                className={`rounded-[4px] border-[1px] border-neutral-400 placeholder:text-neutral-500 placeholder:font-normal placeholder:text-base 
                focus-within:border-primary-600 focus-within:shadow-input outline-none py-2 px-[10px] transition-all 
                dark:bg-[#9e9e9e40] dark:text-[#C4C4C4] dark:border-0 dark:placeholder:text-[#707070] ${className}
                `}
                {...props}
            />
        </div>
    );
};

export default Input;
