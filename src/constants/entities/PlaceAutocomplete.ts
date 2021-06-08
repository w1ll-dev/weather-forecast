import { PlaceAutocompleteProtocol } from '../protocols';
import PlaceWeatherForecast from './PlaceWeatherForecast';
import {
  PlaceWeatherForecastProtocol,
  OpenWeatherApiResponseProtocol,
} from '../protocols';
import { pt } from '../translate';
import { daysOfTheWeek, months } from '../DateHelpers';

class PlaceAutocomplete implements PlaceAutocompleteProtocol {
  constructor(
    public place_id: string,
    public city: string,
    public country: string,
    public isFavorite: boolean = false
  ) {}
  private _lat?: number;
  private _lng?: number;
  private _placeWeatherForecast: PlaceWeatherForecastProtocol[] = [];

  public addLat(lat: number) {
    this._lat = lat;
  }

  public addLng(lng: number) {
    this._lng = lng;
  }

  private convertDate(dateTime: number, forecastIndex: number) {
    function dayAndDate(secs: number) {
      var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
      t.setUTCSeconds(secs);

      return {
        weekDayIndex: t.getDay(),
        monthDate: `${t.getDate()} de ${months[t.getMonth()]}`,
      };
    }
    let weekDay = '';
    const { monthDate, weekDayIndex } = dayAndDate(dateTime);
    if (forecastIndex === 0 || forecastIndex === 1) {
      weekDay =
        forecastIndex === 0 ? pt.days.todayLabel : pt.days.tomorrowLabel;
    } else {
      weekDay = daysOfTheWeek[weekDayIndex];
    }
    return { weekDay, monthDate };
  }

  public addPlaceWeatherForecast(
    weatherForecastResponse: OpenWeatherApiResponseProtocol
  ) {
    this._placeWeatherForecast = weatherForecastResponse.daily.map(
      ({ dt, temp: { day, min, max }, weather }, index) => {
        const { description } = weather[0];

        const descriptionCapitalized =
          description.split('')[0].toUpperCase() + description.slice(1);

        const { weekDay, monthDate } = this.convertDate(dt, index);
        return new PlaceWeatherForecast(
          dt,
          weekDay,
          monthDate,
          descriptionCapitalized,
          Math.round(day),
          Math.round(min),
          Math.round(max)
        );
      }
    );
  }

  public dataToStorage() {
    return {
      city: this.city,
      country: this.country,
      place_id: this.place_id,
      isFavorite: this.isFavorite,
    };
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

export default PlaceAutocomplete;
