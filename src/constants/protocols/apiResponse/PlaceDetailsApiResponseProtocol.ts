export interface PlaceDetailsApiResponseProtocol {
  result: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  };
}
