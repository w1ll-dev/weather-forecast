interface PlaceAutocompleteInfo {
  place_id: string;
  terms: PlaceAutocompleteTerm[];
}

interface PlaceAutocompleteTerm {
  offset: number;
  value: string;
}

export interface PlaceAutocompleteApiResponseProtocol {
  predictions: PlaceAutocompleteInfo[];
}
