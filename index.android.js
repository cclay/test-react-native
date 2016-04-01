/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 var MOCKED_MOVIES_DATA = [
   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
 ];

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AwesomeProject2 extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
      <Text> {movie.title}</Text>
      <Text> {movie.year}</Text>
      <Image source={{uri: movie.posters.thumbnail}}
             style={styles.thumbnail}
      />

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu67
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer:{
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    margin: 10,
    backgroundColor:'#FFCCFF',
     width: 53,
      height: 81,
    },
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
