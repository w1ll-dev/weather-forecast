import { useEffect, useState } from 'react';
import { getPlacesAutocomplete } from '../repository';
import { PlaceAutocomplete } from '../constants/entities';
import useDebounce from './useDebounce';

function usePlacesAutocomplete() {
  const [places, setPlaces] = useState<PlaceAutocomplete[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [loadingPlaces, setLoadingPlaces] = useState(false);
  const debouncedSearch = useDebounce(searchForPlaces, 200);

  async function searchForPlaces() {
    if (searchValue === '') {
      setPlaces([]);
      return;
    }
    setLoadingPlaces(true);
    const newPlacesList = await getPlacesAutocomplete(searchValue);
    setPlaces(newPlacesList);
    setLoadingPlaces(false);
  }

  useEffect(() => {
    debouncedSearch();
  }, [searchValue]);

  return {
    searchValue,
    setSearchValue,
    places,
    debouncedSearch,
    loadingPlaces,
  };
}

export default usePlacesAutocomplete;
