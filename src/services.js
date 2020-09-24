import { Observable } from 'rxjs/Rx';

const getNewTemperature = () => Math.floor((Math.random() * 100) + 1);
const getNewAirPressure = () => Math.floor((Math.random() * 100) + 1);
const getNewHumidity = () => Math.floor((Math.random() * 100) + 1);

export const observableService = {
    temperature: Observable.interval(150)
        .debounceTime(100)
        .map(getNewTemperature)
        .timeout(1000)
        .catch(() => ["N/A"]),
    airPressure: Observable.interval(150)
        .debounceTime(100)
        .map(getNewAirPressure)
        .timeout(1000)
        .catch(() => ["N/A"]),
    humidity: Observable.interval(150)
        .debounceTime(100)
        .map(getNewHumidity)
        .timeout(1000)
        .catch(() => ["N/A"])
};