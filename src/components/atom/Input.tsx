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
            className={`flex flex-col gap-2 font-nunito-sans ${containerClassname}`}
        >
            {label ? (
                <label htmlFor={props.name} className="font-semibold">
                    {label}
                </label>
            ) : null}
            <input
                className={`rounded-lg border-[1px] placeholder:text-[#8B849B] placeholder:font-semibold placeholder:text-base border-[#1D2433A6] focus-within:border-[#2F6FED] outline-none py-2 px-[10px] transition-all ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
