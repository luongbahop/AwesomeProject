import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

//import pages
import InputButton from '../components/InputButton/InputButton'


const inputArray = [
    [1,2,3,'/'],
    [4,5,6,'*'],
    [7,8,9,'-'],
    [0,'.','=','+']
];

export default class Caculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: 0
        }
    }
    render() {
        return (
            <View style= {styles.container}>  
                <View style={styles.screen} >
                    <Text style={styles.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={styles.keyboard} >
                     { this.rendInputButton() }
                </View>
            </View>
        );
    }
    /*
        function rendInputbutton
        loop row from inputButton
    */  
    rendInputButton(){
        let views = [];
        for(var r = 0; r < inputArray.length; r ++){
            let row = inputArray[r];
            let inputRow = [];

            for(var i = 0; i < row.length; i ++){
                let input = row[i];
                inputRow.push(
                    <InputButton 
                         value={input} 
                         onPress={this.onInputButtonPress.bind(this, input)}
                         key={ r + "-" + i} />
                )
            }
            views.push(
                <View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>
            )
        }


        return views;
    }
    onInputButtonPress(input){
        switch(typeof input){
            case 'number':
                return this.handleNumberInput(input);
            case 'string':
                return this.handleStringInput(input);
        }
    }
    handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;
        alert(inputValue);
        this.setState({
            inputValue: inputValue
        })
    }
    handleStringInput(str){
        switch(str){
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                })
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        flex: 2,
        backgroundColor: 'blue',
    },
    displayText: {
        color: '#fff',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    keyboard: {
        flex: 8,
        backgroundColor: '#99887d'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
})