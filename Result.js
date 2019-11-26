'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';



const Result = ({date, weatherCondition}) => {



      return (
        <TouchableHighlight
          underlayColor='#dddddd'>
          <View style={styles.container}>
            <Text style={styles.date}>{date} <Text style={styles.weather}>{weatherCondition}</Text></Text>
          </View>
        </TouchableHighlight>
      );
};

export default Result

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
  	backgroundColor: '#cbced3',
    padding: 10,
//    marginTop: 65,
    alignItems: 'stretch'
  },
  date: {
    alignItems: 'flex-start',
  },
  weather: {
    alignItems: 'flex-end',
  },
});
