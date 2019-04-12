import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

const firebaseConfig = require('./db/fire_db_config')

class App extends Component {

    componentDidMount() {
        firebase.initializeApp(firebaseConfig)
    }


    render(){
        return (
            <View>
                <Header  headerText="Login Page"/>
                <Text>App</Text>
            </View>
        )
    }
}

export default App;