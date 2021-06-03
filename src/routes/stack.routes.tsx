import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CitiesSave, CityDetails, Search } from '../pages';
const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => (
  <Navigator
    headerMode='none'
    screenOptions={
      {
        // cardStyle: {
        //   backgroundColor: colors.white,
        // },
      }
    }
  >
    <Screen name='CitiesSave' component={CitiesSave} />
    <Screen name='Search' component={Search} />
    <Screen name='CityDetails' component={CityDetails} />
  </Navigator>
);

export default StackRoutes;
