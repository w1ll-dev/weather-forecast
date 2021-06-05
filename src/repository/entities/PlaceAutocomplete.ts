import { PlaceAutocompleteProtocol } from '../../constants';

export class PlaceAutocomplete implements PlaceAutocompleteProtocol {
  constructor(
    public place_id: string,
    public city: string,
    public country: string
  ) {}
}
