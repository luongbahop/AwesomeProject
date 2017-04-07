//import libraries
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';

//import components
import LoginForm from './LoginForm';


export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    updateEmail = (text) => {
         this.setState({email: text});
    }
    updatePassword = (text) => {
         this.setState({password: text});
    }
    login = () => {
        alert('Login infomation: Email: ' + this.state.email + ', Password: ' + this.state.password);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    >

                </StatusBar>
                <View style={styles.logoContainer}>
                    <Image 
                        style="styles.logo"
                        source={require('../../images/bg.png')} 
                    />
                    <Text style={styles.title}>
                        Awesome App is my first react App. So I am very excited to make some creatives
                    </Text>
                </View>
                <View style={styles.loginForm}>
                    <LoginForm
                        updateEmail = { this.updateEmail }
                        updatePassword = { this.updatePassword }
                        login = { this.login }
                     />
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#3498db'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width:260,
        textAlign: 'center',
        opacity: 0.8


    }
});