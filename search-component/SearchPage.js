'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ActivityIndicator,
	Dimensions,
	Image
} from 'react-native';
import UrlHelper from '../utils/urlHelper';

const window = Dimensions.get('window');

export default class SearchPage extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
			searchString: 'london',
			isLoading: false,
			message: ''
		};
	}

	_executeQuery = (query) => {
		console.log(query);
		this.setState({ isLoading: true });
		fetch(query)
			.then(response => response.json())
			.then(json => this._handleResponse(json.response))
			.catch(error => 
				this.setState({
					isLoading: false,
					message: 'Something bad happened ' + error
				}));
	}

	_handleResponse = (response) => {
		this.setState({ isLoading: false, message: '' });
		if(response.application_response_code.substr(0, 1) == '1') {
			this.props.navigation.navigate(
				'Results', { listings: response.listings }
			);
		} else{
			this.setState({ message: 'Location not recognized; please try again.' });
		}
	}

	_onSearchPressed = () => {
		const query = UrlHelper.urlForQueryAndPage('place_name', this.state.searchString, 1);
		this._executeQuery(query);
	}

	_onSearchTextChanged = (event) => {
		console.log('_onSearchTextChanged');
		this.setState({ searchString: event.nativeEvent.text });
		console.log('Current: ' + this.state.searchString + ', Next: ' + event.nativeEvent.text);
	};
	
	static navigationOptions = {
		title: 'Your Living Solution',
	};

	render() {

		const spinner = (this.state.isLoading == true) ? <ActivityIndicator size='large' /> : null;

		console.log('SearchPage.render');
		
		return (
		
			<View style={styles.container}>
				<Image
					source={require('../Resources/bg-house.png')}
					style={styles.image}
					/>				
				<Text style={styles.description}>
					Search for the houses to buy!
					Search by place name or post code
				</Text>
				<View style={styles.flowRight}>
					<TextInput
						underlineColorAndroid={'transparent'}
						style={styles.searchInput}
						value={this.state.searchString}
						onChange={this._onSearchTextChanged}
						placeholder='Search via name or postcode'
						/>
				</View>
				<View style={styles.btnGo}>
					<Button
						onPress={this._onSearchPressed}
						color='#48BBEC'
						title='Go'
						/>
				</View>

				{spinner}
				<Text style={styles.description}>{this.state.message}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image: {
	    width: window.width,
	    height: window.height,
		position: 'absolute',
	},
	btnGo: {
		width: window.width - 20,
		alignItems: 'stretch',
		paddingTop: 10,
		paddingBottom: 10,
	},
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		color: '#ffffff',
		backgroundColor: '#48BBEC'
	},
	container: {
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	searchInput: {
		height: 72,
		padding: 10,
		flexGrow: 1,
		margin: 10,
		backgroundColor: '#ffffff',
		fontSize: 24,
		borderWidth: 2,
		borderColor: '#ffffff',
		borderRadius: 8,
		marginBottom:20,
		color: '#48BBEC'
	}
});