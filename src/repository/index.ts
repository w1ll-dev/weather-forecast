import { requestAdapter } from './adapters/requestAdapter';
import { googleApibaseUrl, openweatherApibaseUrl } from './constants';
import { OPEN_WEATHER_KEY } from '../constants';
import {
  PlaceAutocompleteApiResponseProtocol,
  PlaceAutocompleteProtocol,
} from '../constants/protocols';
import { GOOGLE_SEARCH_API_KEY } from '@env';
import { PlaceAutocomplete } from '../constants/entities';
import { ServerError } from '../constants/errors/ServerError';

export async function getPlacesAutocomplete(
  input: string
): Promise<PlaceAutocompleteProtocol[]> {
  const inputFixed = input.replace(/\s+/g, '+');
  const query = `${googleApibaseUrl}/autocomplete/json?input=${inputFixed}&types=(cities)&language=pt-br&key=${GOOGLE_SEARCH_API_KEY}`;
  try {
    const response: PlaceAutocompleteApiResponseProtocol = await requestAdapter(
      query
    );
    const { predictions } = response;
    const placesList = predictions.map(
      ({ terms, place_id }) =>
        new PlaceAutocomplete(
          place_id,
          terms[0].value,
          terms[terms.length - 1].value
        )
    );
    return placesList;
  } catch (error) {
    throw new ServerError();
  }
}

export async function getPlaceWeather(
  lat: string,
  lon: string
): Promise<PlaceAutocompleteProtocol[]> {
  const query = `${openweatherApibaseUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&&lang=pt&appid=${OPEN_WEATHER_KEY}`;

  try {
    const response: PlaceAutocompleteApiResponseProtocol = await requestAdapter(
      query
    );
    const { predictions } = response;
    const placesList = predictions.map(
      ({ terms, place_id }) =>
        new PlaceAutocomplete(
          place_id,
          terms[0].value,
          terms[terms.length - 1].value
        )
    );
    return placesList;
  } catch (error) {
    throw new ServerError();
  }
}
