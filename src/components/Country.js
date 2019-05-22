import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Country = ({ onPress, countryName, countrySelect }) => {
	const selected = countrySelect === countryName ? 1 : 0;

	const styles = {
	countryTextStyle: {
		borderWidth: 1,
		borderColor: '#3D8E41',
		backgroundColor: selected ? '#3D8E41' : '#C5D4C7',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
};

	return (
		<TouchableOpacity style={styles.countryTextStyle} onPress={onPress}>
			<Text style={{ color: selected ? '#FFF' : '#000' }}>{countryName}</Text>
		</TouchableOpacity>
	);
};

export default Country;
