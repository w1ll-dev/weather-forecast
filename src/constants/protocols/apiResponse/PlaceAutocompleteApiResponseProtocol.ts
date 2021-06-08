interface PlaceAutocompleteInfo {
  place_id: string;
  terms: PlaceAutocompleteTerm[];
}

interface PlaceAutocompleteTerm {
  offset: number;
  value: string;
}

interface PlaceAutocompleteApiResponseProtocol {
  predictions: PlaceAutocompleteInfo[];
}

export default PlaceAutocompleteApiResponseProtocol;
