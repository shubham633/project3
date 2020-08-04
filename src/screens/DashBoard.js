import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mybutton from '../components/Mybutton';
import Realm from 'realm';
let realm;

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'MoviesDatabase.realm',
      schema: [
        {
          name: 'movies_details',
          properties: {
            movies_id: { type: 'int', default: 0 },
            movies_name: 'string',
            genre: 'string',
            description: 'string',
            url:'string',
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={styles.container}>
        <Mybutton
          title="Add Movies"
          customClick={() => this.props.navigation.navigate('AddMovies')}
        />
        <Mybutton
          title="View Movies List"
          customClick={() => this.props.navigation.navigate('ViewMovies')}
        />
        <Mybutton
          title="Update Movies"
          customClick={() => this.props.navigation.navigate('UpdateMovies')}
        />
        <Mybutton
          title="Delete Movies"
          customClick={() => this.props.navigation.navigate('DeleteMovies')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
});