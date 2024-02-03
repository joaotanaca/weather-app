import React from "react";
import theme from "../../store/theme";
import { observer } from "mobx-react";

const DarkModeSwitcher = () => {
    return (
        <div className="w-full md:w-auto" onClick={theme.toogleTheme}>
            {theme.theme === "dark" ? "Ativado" : "Desativado"}
        </div>
    );
};

export default observer(DarkModeSwitcher);
