import {
  OpenWeatherApiResponseProtocol,
  OPEN_WEATHER_KEY,
  PlaceAutocomplete,
  ServerError,
} from '../../constants';
import requestAdapter from '../adapters/requestAdapter';
import { openweatherApibaseUrl } from '../constants';
import getPlaceLatLng from './getPlaceLatLng';

async function getPlaceWeatherForecast(
  place: PlaceAutocomplete
): Promise<PlaceAutocomplete> {
  const placeWithCoordinates = await getPlaceLatLng(place);
  const query = `${openweatherApibaseUrl}?lat=${placeWithCoordinates.lat}&lon=${placeWithCoordinates.lng}&exclude=minutely,hourly,alerts&units=metric&&lang=pt&appid=${OPEN_WEATHER_KEY}`;
  try {
    const response: OpenWeatherApiResponseProtocol = await requestAdapter(
      query
    );
    placeWithCoordinates.addPlaceWeatherForecast(response);
    return placeWithCoordinates;
  } catch (error) {
    throw new ServerError();
  }
}

export default getPlaceWeatherForecast;
