import { action, makeObservable, observable } from "mobx";

export type TScaleTemperature = "fahrenheit" | "celsius";

class Forecasts {
    forecasts: {}[] = [];
    scaleTemperature: TScaleTemperature = "celsius";

    constructor() {
        makeObservable(this, {
            forecasts: observable,
            scaleTemperature: observable,
            addForecast: action.bound,
            removeForecast: action.bound,
            toggleScale: action.bound,
        });
    }

    toggleScale = () => {
        if (this.scaleTemperature === "celsius") {
            this.scaleTemperature = "fahrenheit";
        } else {
            this.scaleTemperature = "celsius";
        }
    };

    addForecast = () => {
        this.forecasts.push();
    };

    removeForecast = () => {
        this.forecasts = this.forecasts.filter(() => {});
    };
}

export default new Forecasts();
