import { PlaceWeatherForecastProtocol } from '../protocols';

export class PlaceWeatherForecast implements PlaceWeatherForecastProtocol {
  constructor(
    public dateTime: number,
    public description: string,
    public dayTemp: number,
    public minTemp: number,
    public maxTemp: number
  ) {}
}
