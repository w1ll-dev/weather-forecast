import {
  GOOGLE_KEY,
  PlaceAutocomplete,
  PlaceAutocompleteApiResponseProtocol,
  ServerError,
} from '../../constants';
import requestAdapter from '../adapters/requestAdapter';
import { googleApibaseUrl } from '../constants';

async function getPlacesAutocomplete(
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

export default getPlacesAutocomplete;
