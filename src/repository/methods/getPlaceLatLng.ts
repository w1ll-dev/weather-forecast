import {
  GOOGLE_KEY,
  PlaceAutocomplete,
  PlaceDetailsApiResponseProtocol,
  ServerError,
} from '../../constants';
import requestAdapter from '../adapters/requestAdapter';
import { googleApibaseUrl } from '../constants';

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

export default getPlaceLatLng;
