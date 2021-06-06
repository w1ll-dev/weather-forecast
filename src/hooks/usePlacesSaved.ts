import { useIsFocused } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { PlaceAutocomplete } from '../constants';
import { loadStoragePlaces, toggleCityFavoriteStatus } from '../libs';
import { getPlaceWeatherForecast } from '../repository';

export default function usePlacesSaved() {
  const [placesSaved, setPlacesSaved] = useState<PlaceAutocomplete[]>([]);
  const [isLoadingFromStorage, setIsLoadingFromStorage] = useState(false);
  const [lastToggleValue, setLastToggleValue] = useState(false);

  const isFocused = useIsFocused();

  async function loadCities() {
    setIsLoadingFromStorage(true);
    const placesSaved = await loadStoragePlaces();
    const placeWithCompleteInfoList = [];
    for (const place of placesSaved) {
      const placeWithCompleteInfo = await getPlaceWeatherForecast(place);
      placeWithCompleteInfoList.push(placeWithCompleteInfo);
    }
    setPlacesSaved(placeWithCompleteInfoList);
    setIsLoadingFromStorage(false);
  }

  async function changeFavoriteStatus(place: PlaceAutocomplete) {
    await toggleCityFavoriteStatus(place);
    setLastToggleValue(!lastToggleValue);
  }

  useEffect(() => {
    loadCities();
  }, [isFocused, lastToggleValue]);

  return { placesSaved, isLoadingFromStorage, changeFavoriteStatus };
}
