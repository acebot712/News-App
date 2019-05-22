import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';
import CountryHeaders from './src/components/CountryHeaders';
import NewsList from './src/components/NewsList';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header />
		<Text style={styles.textStyle}>Choose a country and read the top news headlines</Text>
		<CountryHeaders />
	</View>
);

const styles = {
	textStyle: {
		fontWeight: '600',
		alignSelf: 'center',
		padding: 5
	}
}


AppRegistry.registerComponent('newsapp', () => App);
