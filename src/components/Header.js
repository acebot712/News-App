import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
		};
	}
	componentDidMount() {
		const that = this;
		const day = new Date().getDate(); //Current Day
		const month = new Date().getMonth() + 1; //Current Month
		const year = new Date().getFullYear(); //Current Year
		let hours = new Date().getHours(); //Current Hours
		// AM/PM conversion
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours %= 12;
		hours = hours || 12; // hour '0' should be made '12'

		let min = new Date().getMinutes(); //Current Minutes
		min = min < 10 ? `0${min}` : min;
		const sec = new Date().getSeconds(); //Current Seconds
		that.setState({
			date: `${day}/${month}/${year}, ${hours}:${min}:${sec} ${ampm}`
		});
	}

	render() {
		return (
			<View>
				<Image
					style={styles.imageStyle}
					source={{ uri: 'https://cdn4.iconfinder.com/data/icons/seo-web-blue-1/100/seo__web_blue_1_39-512.png' }}
				/>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center' }}
				>
					<Text style={{ marginBottom: 12 }}>
							{this.state.date}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	imageStyle: {
		alignSelf: 'center',
		width: 100,
		height: 100,
		marginBottom: 12,
		transform: [{ rotate: '-23deg' }]
	}
};

export default Header;
