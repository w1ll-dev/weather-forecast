import { PlaceAutocompleteProtocol } from '../protocols';

export class PlaceAutocomplete implements PlaceAutocompleteProtocol {
  constructor(
    public place_id: string,
    public city: string,
    public country: string
  ) {}
}
