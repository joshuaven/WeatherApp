'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class WeatherDetails extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: 'Weather Details'
	};

	render() {
		const data = this.props.navigation.state.params.data;
		//var price = property.price_formatted.split(' ')[0];

		return (
			<View style={styles.view}>
				<Image
					style={{ width: 100, height: 100, marginBottom: 10, alignSelf: 'center', marginTop: 10 }}
					source={{
						uri: 'https://www.weatherbit.io/static/img/icons/' + data.weather.icon + '.png'
					}}
				/>
				<Text style={styles.descriptionDetails}>
					<Text style={styles.spanTitle}>Temperature:</Text> {data.temp}
				</Text>
				<Text style={styles.descriptionDetails}>
					<Text style={styles.spanTitle}>Pressure: </Text>
					{data.pres}
				</Text>
				<Text style={styles.descriptionDetails}>
					<Text style={styles.spanTitle}>Precipitation: </Text>
					{data.pop} %
				</Text>
				<Text style={styles.descriptionDetails}>
					<Text style={styles.spanTitle}>Wind Direction: </Text>
					{data.wind_cdir_full}
				</Text>
				<Text style={styles.descriptionDetails}>
					<Text style={styles.spanTitle}>Wind Speed: </Text>
					{data.wind_spd}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	spanTitle: {
		color: '#084645',
		fontSize: 25
	},
	view: {
		flex: 1,
		backgroundColor: '#a6b8ff'
	},
	descriptionDetails: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 35,
		textAlign: 'right',
		color: '#277aeb'
	}
});
