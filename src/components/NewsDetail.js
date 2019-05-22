import React from 'react';
import { View, Text, Image } from 'react-native';

const NewsDetail = ({ headline, image }) => {
	return (
		<View style={styles.newsContainerStyles}>
			<Image 
				style={styles.imageStyle}
				source={{ uri: image }} 
			/>
			<Text>{headline}</Text>
		</View>
	);
};

const styles = {
	imageStyle: {
		alignSelf: 'center',
		width: 150,
		height: 100
	},
	newsContainerStyles: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		borderColor: '#ddd',
	}
};

export default NewsDetail;
