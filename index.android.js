/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

 var MOCKED_MOVIES_DATA = [{
  title: 'Title',
  year: '2015',
  posters: {
    thumbnail: 'http://i.imgur.com/UePbdph.jpg'
  }
}, ];

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AwesomeProject2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== ro2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
     if (!this.state.loaded) {
        return this.renderLoadingView();
      }

    return(
     <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderMovie}
       style={styles.listView}
      />
    );
  }

  renderLoadingView(){
    return(
      <View style={styles.container}>
       <Text> Loading movies </Text>
       </View>
    );
  }

  renderMovie(movie){
    return(
      <View style={styles.container}>
      <Image source={{uri: movie.posters.thumbnail}}
             style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}> {movie.title}</Text>
        <Text style={styles.year}> {movie.year}</Text>
      </View>
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
  rightContainer: {
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
    padding: 20,
    backgroundColor: '#FFCCFF',
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#CCFFFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});
AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
