'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ActivityIndicator,
	TouchableHighlight,
	Image,
	Dimensions,
	ScrollView
} from 'react-native';
import UrlHelper from '../utils/urlHelper';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    paddingBottom: 20,
  },
  content: {

  },
  image: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
	position: 'absolute',    
  },
  header: {
    width: window.width,
    height: window.width,
	padding: 10,    
  },
  headerText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 23,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
	padding: 10,    
  },
  bodyText: {
    padding: 10,
    fontSize: 15,
	color: '#5D5D5D', 
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',   
  },
  bodyTextTitle: {
  	fontWeight: 'bold',
  }
});

export default class SearchDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			message: ''
		};
	}

	static navigationOptions = {
		title: 'Details'
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<ScrollView style={styles.container}>
				<View style={styles.content}>
					<View style={styles.header}>
						<Image style={styles.image} source={{uri: params.listings.img_url}} />
						<Text style={styles.headerText}>{params.listings.title}</Text>
					</View>
					<View style={styles.bodyText}>
						<Text style={styles.bodyTextTitle}>Summary</Text>
						<Text>{params.listings.summary}</Text>
					</View>
					<View style={styles.bodyText}>
						<Text style={styles.bodyTextTitle}>Data Source Name</Text>
						<Text>{params.listings.datasource_name}</Text>
					</View>
					<View style={styles.bodyText}>
						<Text style={styles.bodyTextTitle}>Bathroom Number: {params.listings.bathroom_number} | Bedroom Number: {params.listings.bedroom_number}</Text>
						<Text></Text>
					</View>
					<View style={styles.bodyText}>
						<Text style={styles.bodyTextTitle}>Keywords</Text>
						<Text>{params.listings.keywords}</Text>
					</View>
					<View style={styles.bodyText}>
						<Text style={styles.bodyTextTitle}>Last Updated</Text>
						<Text>{params.listings.updated_in_days_formatted}</Text>
					</View>
					{params.listings.lister_name !== null ? (
					<View style={styles.bodyText}>
						<Text style={styles.bodyTextTitle}>Lister Name</Text>
						<Text>{params.listings.lister_name}</Text>
					</View>
					) : ''}
							
				</View>
			</ScrollView>
		);
	}

}