import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight 
} from 'react-native';




export default class InputButton extends Component {
    state = {  }
    render() {
        return (
            <TouchableHighlight  style={styles.container}
                                 underlayColor="#193441"
                                 onPress={this.props.onPress}
                                 >
               <Text style={styles.text}>
                    {this.props.value}
               </Text>
            </TouchableHighlight >
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
})