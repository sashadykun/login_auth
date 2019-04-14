import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/login_form';


const firebaseConfig = require('./db/fire_db_config')

class App extends Component {



    componentDidMount() {
        
        firebase.initializeApp(firebaseConfig)
    }


    render(){
        return (
            <View>
                <Header  headerText="Login Page"/>
                <LoginForm />
            </View>
        )
    }
}

export default App;