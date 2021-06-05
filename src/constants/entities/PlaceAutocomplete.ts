import { PlaceAutocompleteProtocol } from '..';
import { PlaceWeatherForecast } from './PlaceWeatherForecast';
import {
  PlaceWeatherForecastProtocol,
  OpenWeatherApiResponseProtocol,
} from '../protocols';

export class PlaceAutocomplete implements PlaceAutocompleteProtocol {
  constructor(
    public place_id: string,
    public city: string,
    public country: string
  ) {}
  private _lat?: number;
  private _lng?: number;
  private _placeWeatherForecast: PlaceWeatherForecastProtocol[] = [];

  addLat(lat: number) {
    this._lat = lat;
  }

  addLng(lng: number) {
    this._lng = lng;
  }

  addPlaceWeatherForecast(
    weatherForecastResponse: OpenWeatherApiResponseProtocol
  ) {
    this._placeWeatherForecast = weatherForecastResponse.daily.map(
      ({ dt, temp: { day, min, max }, weather }) => {
        const { description } = weather[0];

        const descriptionCapitalized =
          description.split('')[0].toUpperCase() + description.slice(1);

        return new PlaceWeatherForecast(
          dt,
          descriptionCapitalized,
          Math.round(day),
          Math.round(min),
          Math.round(max)
        );
      }
    );
  }

  get lat() {
    return this._lat;
  }

  get lng() {
    return this._lng;
  }

  get placeWeatherForecast() {
    return this._placeWeatherForecast;
  }
}
