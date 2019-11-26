/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import LandingPage from './LandingPage';
import WeatherDetails from './WeatherDetails';
import WeatherStatistics from './WeatherStatistics';
// import SearchResults from './SearchResults';

const TabScreen = createMaterialTopTabNavigator(
	{
		Home: { screen: LandingPage }
	},
	{
		tabBarPosition: 'top',
		swipeEnabled: true,
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#FFFFFF',
			inactiveTintColor: '#F8F8F8',
			style: {
				backgroundColor: '#633689'
			},
			labelStyle: {
				textAlign: 'center'
			},
			indicatorStyle: {
				borderBottomColor: '#87B56A',
				borderBottomWidth: 2
			}
		}
	}
);

const DetailsScreen = createMaterialTopTabNavigator(
	{
		Home: { screen: WeatherDetails }
	},
	{
		tabBarPosition: 'top',
		swipeEnabled: true,
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#FFFFFF',
			inactiveTintColor: '#F8F8F8',
			style: {
				backgroundColor: '#633689'
			},
			labelStyle: {
				textAlign: 'center'
			},
			indicatorStyle: {
				borderBottomColor: '#87B56A',
				borderBottomWidth: 2
			}
		}
	}
);

const App = createStackNavigator({
	TabScreen: {
		screen: TabScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#633689'
			},
			headerTintColor: '#FFFFFF',
			title: "Today's Weather 💧"
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#633689'
			},
			headerTintColor: '#FFFFFF',
			title: '🌎 Weather Details ☀️'
		}
	},
	Statistics: {
		screen: WeatherStatistics,
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#633689'
			},
			headerTintColor: '#FFFFFF',
			title: '🌎 Weather Statistics ☀️'
		}
	}
});

const AppContainer = createAppContainer(App);

export default AppContainer;
