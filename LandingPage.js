'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ActivityIndicator,
	FlatList,
	Image,
	Dimensions
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
//import Result from './Result';

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			dayShort: '',
			temperature: '',
			isLoading: 'false',
			message: '',
			condition: ''
		};
	}

	static navigationOptions = {
		title: 'Overview'
	};

	fetchWeather() {
		var that = this;
		fetch(
			'http://api.weatherbit.io/v2.0/forecast/daily?city=Cebu&encoding=json&key=508da2c0980a44c59636db1de86a5132&days=7'
		)
			.then((data) => data.json())
			.then((json) => {
				var startDate = new Date().getDate();
				var temperatureData = [];
				var dateLabels = [];
				json.data.forEach((element) => {
					temperatureData.push(element.temp);
					dateLabels.push(startDate++);
				});

				that.setState({
					temperature: json.data[0].temp,
					isLoading: false,
					condition: json.data[0].weather.description,
					dataSource: json.data,
					city: json.city_name,
					icon: json.data[0].weather.icon,
					temperatureData: temperatureData,
					dateLabels: dateLabels
				});
			});
	}

	componentDidMount() {
		this.fetchWeather();
		var that = this;
		var weekday = new Array(7);
		weekday[0] = 'Sunday';
		weekday[1] = 'Monday';
		weekday[2] = 'Tuesday';
		weekday[3] = 'Wednesday';
		weekday[4] = 'Thursday';
		weekday[5] = 'Friday';
		weekday[6] = 'Saturday';
		var monthname = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		var getWeekdayShort = weekday[new Date().getDay()].substring(0, 2);
		var getWeekDay = weekday[new Date().getDay()];
		var date = new Date().getDate(); //Current Date
		var month = monthname[new Date().getMonth()]; //Current Month
		var year = new Date().getFullYear(); //Current Year
		this.setState({
			//Setting the value of the date time
			date: getWeekDay + ', ' + month + ' ' + date + ', ' + year
		});
	}

	render() {
		return (
			<View>
				<View style={styles.container}>
					<Image
						style={styles.image}
						source={{
							uri: 'https://www.weatherbit.io/static/img/icons/' + this.state.icon + '.png'
						}}
					/>
					<Text style={styles.description}>{this.state.date}</Text>
					<Text style={styles.description}>{this.state.temperature}</Text>
					<Text style={styles.description}>{this.state.condition}</Text>
				</View>
				<Button
					title="Statisticsssss"
					onPress={() =>
						this.props.navigation.navigate('Statistics', {
							temperatureData: this.state.temperatureData,
							dateLabels: this.state.dateLabels
						})}
				/>
				<View style={styles.flowRight} />
				<FlatList
					data={this.state.dataSource}
					renderItem={({ item }) => (
						<Button
							title={item.datetime + ' ' + item.weather.description}
							onPress={() => this.props.navigation.navigate('Details', { data: item })}
						/>
					)}
					keyExtractor={({ datetime }, index) => datetime}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		marginBottom: 10
	},
	description: {
		marginBottom: 10,
		fontSize: 18,
		textAlign: 'center',
		color: '#FFFFFF'
	},
	container: {
		backgroundColor: '#277aeb',
		padding: 15,
		//    marginTop: 65,
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	}
});
