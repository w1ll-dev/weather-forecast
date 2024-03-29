import { useNetInfo } from '@react-native-community/netinfo';
import { useIsFocused } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { PlaceAutocomplete } from '../constants';
import { loadStoragePlaces, toggleCityFavoriteStatus } from '../libs';
import { getPlaceWeatherForecast } from '../repository';

function usePlacesSaved() {
  const { isConnected } = useNetInfo();
  const [placesSaved, setPlacesSaved] = useState<PlaceAutocomplete[]>([]);
  const [isLoadingFromStorage, setIsLoadingFromStorage] = useState(false);
  const [lastToggleValue, setLastToggleValue] = useState(false);
  const [placeToToggleFavorite, setPlaceToToggleFavorite] =
    useState<PlaceAutocomplete>();

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

  async function changeFavoriteStatus(place?: PlaceAutocomplete) {
    if (!place) return;
    await toggleCityFavoriteStatus(place);
    setLastToggleValue(!lastToggleValue);
  }

  useEffect(() => {
    changeFavoriteStatus(placeToToggleFavorite);
  }, [placeToToggleFavorite]);

  useEffect(() => {
    if (!isConnected) return setPlacesSaved([]);
    loadCities();
  }, [isFocused, lastToggleValue, isConnected]);

  return {
    placesSaved,
    isLoadingFromStorage,
    setPlaceToToggleFavorite,
    isConnected,
  };
}

export default usePlacesSaved;
