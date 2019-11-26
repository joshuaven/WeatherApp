'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default class WeatherStatistics extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: 'Weather Statistics'
	};

	render() {
		const temperatureData = this.props.navigation.state.params.temperatureData;
		const dateLabels = this.props.navigation.state.params.dateLabels;
		return (
			<View style={styles.view}>
				<LineChart
					data={{
						labels: dateLabels,
						datasets: [
							{
								data: temperatureData,
								strokeWidth: 2
							}
						]
					}}
					width={Dimensions.get('window').width - 16}
					height={220}
					chartConfig={{
						backgroundColor: '#1cc910',
						backgroundGradientFrom: '#eff3ff',
						backgroundGradientTo: '#efefef',
						decimalPlaces: 2,
						color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						style: {
							borderRadius: 16
						}
					}}
					style={{
						marginVertical: 8,
						borderRadius: 16
					}}
				/>
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
