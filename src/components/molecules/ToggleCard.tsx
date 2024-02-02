import { observer } from "mobx-react";
import React, { useMemo } from "react";

type ToggleCardProps = {
    title: string;
    active?: boolean;
    titleDetails?: string;
    description: string;
    onClick?: () => void;
};

const ToggleCard = ({
    active,
    title,
    titleDetails,
    description,
    onClick,
}: ToggleCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`${
                active ? "border-primary-600" : ""
            } border-2 p-5 flex flex-col sm:gap-3 rounded-[8px] cursor-pointer select-none transition-all`}
        >
            <h2 className="font-semibold">
                {title}
                <span className="text-neutral-600 dark:text-gray-300 font-medium ml-2">
                    {titleDetails}
                </span>
            </h2>
            <p className="text-neutral-600 dark:text-gray-300 text-sm font-normal">
                {description}
            </p>
        </div>
    );
};

export default observer(ToggleCard);
