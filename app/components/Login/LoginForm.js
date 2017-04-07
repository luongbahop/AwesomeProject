//import libraries
import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    
} from 'react-native';

//import cmponents

export default class LoginForm extends Component {
    
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
               <TextInput 
                    onChangeText = { this.props.updateEmail } 
                    placeholder="E-mail or username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.forcus() }
                    style={styles.input}
                    />
                <TextInput 
                    onChangeText = { this.props.updatePassword }
                    placeholder = "Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.input}
                    ref = { (input)=> this.passwordInput = input }
                    />
                 <TouchableOpacity>
                    <Text onPress= { () => this.props.login(this.props.email,this.props.password) } style={styles.button}>Login</Text>
                 </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal:10,
        marginBottom:20,
        color: '#fff',
    },
    button: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        backgroundColor: 'blue',
        margin:20,
        padding:10

    }
});