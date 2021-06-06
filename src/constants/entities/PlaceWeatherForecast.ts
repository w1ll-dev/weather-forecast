import { PlaceWeatherForecastProtocol } from '../protocols';

export class PlaceWeatherForecast implements PlaceWeatherForecastProtocol {
  constructor(
    public dateTime: number,
    public weekDay: string,
    public monthDate: string,
    public description: string,
    public dayTemp: number,
    public minTemp: number,
    public maxTemp: number
  ) {}
}
