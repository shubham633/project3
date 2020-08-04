import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Realm from 'realm';
let realm;

export default class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies_name: '',
      genre: '',
      description: '',
      url:'',
    };
    realm = new Realm({ path: 'MoviesDatabase.realm' });
  }

  add_movies = () => {
    var that = this;
    const { movies_name } = this.state;
    const { genre } = this.state;
    const { description } = this.state;
    const { url } = this.state;
    if (movies_name) {
      if (genre) {
        if (description) {
          if (url) {
          realm.write(() => {
            var ID =
              realm.objects('movies_details').sorted('movies_id', true).length > 0
                ? realm.objects('movies_details').sorted('movies_id', true)[0]
                    .movies_id + 1
                : 1;
            realm.create('movies_details', {
              movies_id: ID,
              movies_name: that.state.movies_name,
              genre: that.state.genre,
              description: that.state.description,
              url: that.state.url,
            });
            Alert.alert(
              'Success',
              'Movie is successfully added',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('DashBoard'),
                },
              ],
              { cancelable: false }
            );
          });
        } else 
          alert('Please fill movie url');
      } else 
        alert('Please fill movie description');
    } else 
      alert('Please fill genre');
  }else 
    alert('Plese fill movie_name');
};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">

          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoiding}>

            <Mytextinput
              placeholder="Enter Movie Name"
              onChangeText={movies_name => this.setState({ movies_name })}
            />

            <Mytextinput
              placeholder="Enter Genre"
              onChangeText={genre => this.setState({ genre })}
              maxLength={20}
            />

            <Mytextinput
              placeholder="Enter Description"
              onChangeText={description => this.setState({ description })}
              maxLength={225}
              numberOfLines={8}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />

            <Mytextinput
              placeholder="Enter Movie Url"
              onChangeText={url => this.setState({ url })}
              maxLength={20}
            />

            <Mybutton
              title="Add"
              customClick={this.add_movies.bind(this)}
            />

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
  },
  keyboardAvoiding:{
    flex: 1,
    justifyContent:'space-between',
  },
});