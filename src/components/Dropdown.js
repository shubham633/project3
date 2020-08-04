import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, Text,Animated } from "react-native";

export default class App extends Component {
constructor(props) {
super(props);
this.state = {
text: ''
};
}

animatedValue = new Animated.Value(0);

    componentDidMount() {
        Animated.timing(this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }).start();
    }
    
render() {
var data = [["AllMovies", "Comdedy", "Drama", "Action"]];
return (
<View>
<DropdownMenu
style={{flex: 0.5,}}
bgColor={'black'}
tintColor={'grey'}
activityTintColor={'red'}
handler={(selection, row) => this.setState({text: data[selection][row]})}
data={data}
>
</DropdownMenu>
</View>
);
}
}