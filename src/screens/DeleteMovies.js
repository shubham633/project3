import React from 'react';
import { Button, Text, View, Alert, StyleSheet } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Realm from 'realm';
let realm;
export default class DeleteMovies extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'MoviesDatabase.realm' });
    this.state = {
      input_movies_id: '',
    };
  }

  deleteMovies = () => {
    var that = this;
    const { input_movies_id } = this.state;
    realm.write(() => {
      var ID = this.state.input_movies_id;
      if (realm.objects('movies_details').filtered('movies_id =' + input_movies_id).length > 0) 
      {
        realm.delete(
          realm.objects('movies_details').filtered('movies_id =' + input_movies_id)
        );
        var movies_details = realm.objects('movies_details');
        console.log(movies_details);
        Alert.alert(
          'Success',
          'Movie deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => that.props.navigation.navigate('DashBoard'),
            },
          ],
          { cancelable: false }
        );
      } else {
        alert('Please insert a valid Movies Id');
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>

        <Mytextinput
          placeholder="Enter Movie Id"
          onChangeText={input_movies_id => this.setState({ input_movies_id })}
        />
        <Mybutton
          title="Delete Movie"
          customClick={this.deleteMovies.bind(this)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white', 
  },
});