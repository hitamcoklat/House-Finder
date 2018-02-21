import React, { PureComponent } from 'react';
import {
  Dimensions,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import GridList from 'react-native-grid-list';

export const { width, height } = Dimensions.get('window');

const newImage = {
  0: 'business',
  1: 'cats',
  2: 'city',
  3: 'food',
  4: 'nightlife',
  5: 'fashion',
  6: 'people',
  7: 'nature',
  8: 'animals',
  9: 'imageUrl',
};

const image = index => ({
  thumbnail: {
    uri: `https://lorempixel.com/200/200/${
      newImage[index % (Object.keys(newImage).length - 1)]
    }`,
  },
});

const itemsAnimationAndSeparator = Array.from(Array(12)).map((_, index) =>
  image(index),
);

export default class App extends PureComponent {
  
  renderItemAnimationAndSeparator = ({ item, animation }) => (
    <Image
      style={styles.imageRadius}
      source={item.thumbnail}
      onLoad={() => animation.start()}
    />
  );

  _searchCity = () => {
      this.props.navigation.navigate(
        'Search'
      );    
  }

  renderItemAnimation = ({ item, animation }) => (
    <Image
      style={styles.image}
      source={item.thumbnail}
      onLoad={() => animation.start()}
    />
  );

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* AnimationAndSeparator */}

        <View style={styles.girdAnimationAndSeparator}>
          <GridList
            showAnimation
            showSeparator
            data={itemsAnimationAndSeparator}
            numColumns={3}
            renderItem={this.renderItemAnimationAndSeparator}
            separatorBorderWidth={10}
            separatorBorderColor={'black'}
            animationInitialBackgroundColor={'white'}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={this._searchCity}
            style={styles.buttonSearch}>
              <Text style={styles.textBtn}>Click To Search City</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textBtn: {
    textAlign: 'center', 
    marginTop: 25, 
    marginBottom: 30, 
    fontSize: 24,
    color: 'white'
  },
  buttonSearch: {
    backgroundColor: '#117AF3',
  },
  container: {
    flex: 1,
  },
  girdAnimationAndSeparator: {
    backgroundColor: 'black',
  },
  girdAnimation: {
    backgroundColor: 'tomato',
  },
  girdSeparator: {
    borderWidth: 1,
  },
  imageRadius: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  child: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.2,
    textAlign: 'center',
  },
});
