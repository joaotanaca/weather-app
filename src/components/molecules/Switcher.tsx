import React from "react";

type TSwitch = {
    value: boolean;
    toggle: () => void;
};

const Switcher = ({ value, toggle }: TSwitch) => {
    return <div onClick={toggle}>{value ? "Ativado" : "Desativado"}</div>;
};

export default Switcher;
