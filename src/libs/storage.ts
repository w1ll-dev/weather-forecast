import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlaceAutocompleteProtocol, StorageCityProtocol } from '../constants';
import { PlaceAutocomplete } from '../constants';
import { citiesStorageKey } from '../repository/constants';
import { StorageError } from '../constants/errors/StorageError';

export async function savePlaceOnStorage(
  place: PlaceAutocomplete
): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(citiesStorageKey);
    const oldCities = data
      ? (JSON.parse(data) as PlaceAutocompleteProtocol)
      : {};

    if (oldCities.hasOwnProperty(place.place_id)) return;

    const newCity = {
      [place.place_id]: {
        data: place,
      },
    };

    await AsyncStorage.setItem(
      citiesStorageKey,
      JSON.stringify({
        ...newCity,
        ...oldCities,
      })
    );
  } catch (error) {
    throw new StorageError();
  }
}

export async function loadStoragePlaces(): Promise<PlaceAutocomplete[]> {
  try {
    const data = await AsyncStorage.getItem(citiesStorageKey);
    const savedCities = data ? (JSON.parse(data) as StorageCityProtocol) : {};

    const savedCitiesSorted = Object.keys(savedCities).map(
      (place_id) =>
        new PlaceAutocomplete(
          savedCities[place_id].data.place_id,
          savedCities[place_id].data.city,
          savedCities[place_id].data.country
        )
    );

    return savedCitiesSorted;
  } catch (error) {
    throw new StorageError();
  }
}
