'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchPage from './search-component/SearchPage';
import SearchResults from './search-component/SearchResults';
import SearchDetails from './search-component/SearchDetails';
import SearchHome from './search-component/SearchHome';

const App = StackNavigator({
  Home: { 
  	screen: SearchHome, 
  	navigationOptions: {
  		header: null
  	}
  },
  Search: { screen: SearchPage },
  Results: { screen: SearchResults },
  Details: { screen: SearchDetails }
});

export default App;
