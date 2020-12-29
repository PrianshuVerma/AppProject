import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home';
import Search from './src/Search';

const navigator = createStackNavigator(
  {
    HomePage: Home,
    SearchPage: Search
  },

  {
    initialRouteName: 'SearchPage',

    defualtNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppNavigator(navigator);
