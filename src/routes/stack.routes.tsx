import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CitiesSave, CityDetails, Search } from '../pages';
import { pages } from '../constants';
const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => (
  <Navigator headerMode='none'>
    <Screen name={pages.SEARCH} component={Search} />
    <Screen name={pages.CITIES_SAVE} component={CitiesSave} />
    <Screen name={pages.CITY_DETAILS} component={CityDetails} />
  </Navigator>
);

export default StackRoutes;
