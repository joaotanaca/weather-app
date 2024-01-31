import React from "react";

type TSwitch = {
    value: boolean;
    toggle: () => void;
    className?: string;
};

const Switcher = ({ value, toggle, className }: TSwitch) => {
    return (
        <div className={className} onClick={toggle}>
            {value ? "Ativado" : "Desativado"}
        </div>
    );
};

export default Switcher;
