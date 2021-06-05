import { PlaceAutocompleteProtocol } from './PlaceAutocompleteProtocol';

export interface StorageCityProtocol {
  [id: string]: {
    data: PlaceAutocompleteProtocol;
  };
}
