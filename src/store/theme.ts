import { makeAutoObservable } from "mobx";

class Theme {
    switch: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }

    toogleTheme = () => {
        this.switch = !this.switch;
        document.documentElement.classList.toggle("dark");
        return this;
    };

    get theme() {
        return !this.switch ? "dark" : "light";
    }
}

export default new Theme();
