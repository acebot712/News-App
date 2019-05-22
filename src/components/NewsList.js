import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			news: []
		};
	}

	componentWillMount() {
		const countryCode = 'us';
		try {
			axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey={API_KEY}`)
			.then(response => this.setState({ news: response.data.articles }));
		} catch (err) {
			ToastAndroid.show('We are experiencing some Connection Problems. Please check network and/or restart the app', ToastAndroid.SHORT);
		}
	}

	componentDidUpdate() {
		const country = this.props.countrySelect;
		let countryCode = 'us';
		switch (country) {
			case 'USA':
				countryCode = 'us';
				break;
			case 'India':
				countryCode = 'in';
				break;
			case 'France':
				countryCode = 'fr';
				break;
			case 'Canada':
				countryCode = 'ca';
				break;
			case 'Russia':
				countryCode = 'ru';
				break;
			default:
				countryCode = 'us';
		}
		axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey={API_KEY}`)
		.then(response => this.setState({ news: response.data.articles }));	
	}

	renderAlbums() {
		return this.state.news.map(article => 
			<NewsDetail key={article.title} headline={article.title} image={article.urlToImage} />
		);
	}

	render() {		
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default NewsList;
