import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/login_form';


const firebaseConfig = require('./db/fire_db_config')

class App extends Component {

    state = { loggedIn: null }


    componentDidMount() {
        
        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });

            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderContent(){

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                    
                );
            case false:
                return <LoginForm />
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    </Card>
                                       
                )
        }
        
    }


    render(){
        return (
            <View >
                <Header  headerText="Login Page"/>
                {this.renderContent()}
            </View>
        )
    }
}



export default App;