import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// screens
import HomeScreen from './screens/home';
import TopFilms from './screens/topFilms';
import ByDecades from './screens/byDecades';
import Favourites from './screens/favourites';
import PlayerWebView from './screens/playerWebView';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        TopFilms: {
            screen: TopFilms
        },
        ByDecades: {
            screen: ByDecades
        },
        Favourites: {
            screen: Favourites
        },
        PlayerWebView: {
            screen: PlayerWebView
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);