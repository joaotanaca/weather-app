import { action, makeObservable, observable } from "mobx";
import secureLocalStorage from "../lib/secureLocalStorage";

type ThemeType = "dark" | "light";
class Theme {
    theme: ThemeType = "light";
    constructor() {
        makeObservable(this, {
            theme: observable,
            toogleTheme: action.bound,
            validateTheme: action.bound,
        });
    }

    toogleTheme = () => {
        this.theme = this.theme === "light" ? "dark" : "light";
        secureLocalStorage.set("theme", this.theme);
        document.documentElement.classList.toggle("dark");
    };

    validateTheme = () => {
        this.theme = (secureLocalStorage.get("theme") || "light") as ThemeType;
        if (this.theme === "dark")
            document.documentElement.classList.toggle("dark");
    };
}

export default new Theme();
