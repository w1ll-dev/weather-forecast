import { requestAdapter } from './adapters/requestAdapter';
import {
  OPEN_WEATHER_KEY,
  GOOGLE_KEY,
  PlaceAutocompleteApiResponseProtocol,
  ServerError,
  OpenWeatherApiResponseProtocol,
  PlaceDetailsApiResponseProtocol,
} from '../constants';
import { PlaceAutocomplete } from '../constants/entities';
import { googleApibaseUrl, openweatherApibaseUrl } from './constants';

export async function getPlacesAutocomplete(
  input: string
): Promise<PlaceAutocomplete[]> {
  const inputFixed = input.replace(/\s+/g, '+');
  const query = `${googleApibaseUrl}/autocomplete/json?input=${inputFixed}&types=(cities)&language=pt-br&key=${GOOGLE_KEY}`;
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

async function getPlaceLatLng(
  place: PlaceAutocomplete
): Promise<PlaceAutocomplete> {
  const query = `${googleApibaseUrl}/details/json?place_id=${place.place_id}&key=${GOOGLE_KEY}`;
  try {
    const response: PlaceDetailsApiResponseProtocol = await requestAdapter(
      query
    );
    const {
      result: {
        geometry: {
          location: { lat, lng },
        },
      },
    } = response;

    place.addLat(lat);
    place.addLng(lng);

    return place;
  } catch (error) {
    throw new ServerError();
  }
}

export async function getPlaceWeatherForecast(
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
