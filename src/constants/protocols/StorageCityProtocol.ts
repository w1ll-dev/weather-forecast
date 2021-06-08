import PlaceAutocompleteProtocol from './PlaceAutocompleteProtocol';

interface StorageCityProtocol {
  [id: string]: {
    data: PlaceAutocompleteProtocol;
  };
}

export default StorageCityProtocol;
