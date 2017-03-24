import React ,{Component} from 'react';
import {AppRegistry, View, Text} from  'react-native';
 export default class myapp extends Component{
   render(){
      return(
        <View>
            <Text>Hello</Text>
        </View>
      );
   }
 }

 AppRegistry.registerComponent('myapp', () => myapp);