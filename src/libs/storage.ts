import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlaceAutocompleteProtocol, StorageCityProtocol } from '../constants';
import { PlaceAutocomplete } from '../constants';
import { citiesStorageKey } from '../repository/constants';
import StorageError from '../constants/errors/StorageError';

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
        data: place.dataToStorage(),
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

    let savedCitiesSorted: PlaceAutocomplete[] = [];

    Object.keys(savedCities).forEach((place_id) => {
      const place = new PlaceAutocomplete(
        savedCities[place_id].data.place_id,
        savedCities[place_id].data.city,
        savedCities[place_id].data.country,
        savedCities[place_id].data.isFavorite
      );
      place.isFavorite
        ? savedCitiesSorted.unshift(place)
        : savedCitiesSorted.push(place);
    });

    return savedCitiesSorted;
  } catch (error) {
    throw new StorageError();
  }
}

export async function toggleCityFavoriteStatus(
  place: PlaceAutocomplete
): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(citiesStorageKey);
    const cities = data ? (JSON.parse(data) as StorageCityProtocol) : {};

    Object.keys(cities).forEach((place_id) => {
      if (place_id === place.place_id)
        cities[place_id].data.isFavorite = !cities[place_id].data.isFavorite;
    });

    await AsyncStorage.setItem(
      citiesStorageKey,
      JSON.stringify({
        ...cities,
      })
    );
  } catch (error) {
    throw new StorageError();
  }
}
