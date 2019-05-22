import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Country from './Country';
import NewsList from './NewsList';

class CountryHeaders extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			selected: 'USA'
		};
	}

	countrySelect(num) {
		const countryArray = ['USA', 'India', 'France', 'Canada', 'Russia'];
		this.setState({ selected: countryArray[num - 1] });
		return this.state.selected;
	}

	render() {
		const { countryContainerStyle, selectedHeaderContainerStyle, selectedHeaderTextStyle } = styles;

		return (
			<View>
				<View style={countryContainerStyle}>
					<Country countrySelect={this.state.selected} countryName={'USA'} onPress={() => this.countrySelect(1)} />
					<Country countrySelect={this.state.selected} countryName={'India'} onPress={() => this.countrySelect(2)} />
					<Country countrySelect={this.state.selected} countryName={'France'} onPress={() => this.countrySelect(3)} />
					<Country countrySelect={this.state.selected} countryName={'Canada'} onPress={() => this.countrySelect(4)} />
					<Country countrySelect={this.state.selected} countryName={'Russia'} onPress={() => this.countrySelect(5)} />
				</View>
				<View style={selectedHeaderContainerStyle}>
					<Text style={selectedHeaderTextStyle} >{this.state.selected}</Text>
				</View>
				<NewsList countrySelect={this.state.selected} />
			</View>
		);
	}
}

const styles = {
	countryContainerStyle: {
		flexDirection: 'row',
		borderWidth: 1,
		justifyContent: 'space-around'
	},
	selectedHeaderContainerStyle: {
		alignItems: 'center',
		backgroundColor: '#061E04',
		padding: 5
	},
	selectedHeaderTextStyle: {
		fontWeight: '600',
		color: '#FFF'
	}
};

export default CountryHeaders;
