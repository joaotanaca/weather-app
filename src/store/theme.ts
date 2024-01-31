import { action, computed, makeObservable, observable } from "mobx";

class Theme {
    switch: boolean = false;
    constructor() {
        makeObservable(this, {
            switch: observable,
            toogleTheme: action.bound,
            theme: computed,
        });
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
