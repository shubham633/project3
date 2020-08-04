import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserSignIn from '../screens/UserSignIn';
import UserSignUp from '../screens/UserSignUp';
import AdminSignIn from '../screens/AdminSignIn';
import AdminSignUp from '../screens/AdminSignUp';
import DashBoard from '../screens/DashBoard';
import AddMovies from '../screens/AddMovies';
import UpdateMovies from '../screens/UpdateMovies';
import ViewMovies from '../screens/ViewMovies';
import DeleteMovies from '../screens/DeleteMovies';
import Dropdown from '../components/Dropdown';


const AppNavigator = createStackNavigator({
	UserSignIn:{
		screen:UserSignIn,
	},
	UserSignUp:{
		screen:UserSignUp,
	},
	AdminSignIn:{
		screen:AdminSignIn,
	},
	AdminSignUp:{
		screen:AdminSignUp,
	},
    DashBoard: {
    screen: DashBoard,
    },
    ViewMovies: {
    screen: ViewMovies,
    navigationOptions: {
      headerTitle: () => <Dropdown />,
    },
    },
    UpdateMovies: {
    screen: UpdateMovies,
    },
    AddMovies: {
    screen: AddMovies,
    },
    DeleteMovies: {
    screen: DeleteMovies,
    },
},

{
	initialRouteName: 'UserSignIn',
	
}
);

export default createAppContainer(AppNavigator);