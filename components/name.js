
import React, {useState} from "react";
import { ScrollView } from "react-native";
import {  View ,StyleSheet,TextInput} from "react-native";
import { Text,Accordion, Button } from 'galio-framework';

class Name extends React.Component{
 

    constructor(props){  
        super(props);  
        this.state = {  
             name: "" 
          }  
        this.handleChange = this.handleChange.bind(this);  
      }
      handleChange(text){
        this.setState({ name: text })
        
      }  
      render() {  
        return (  
        <View>
          <TextInput 
              value={this.state.name} 
              onChangeText={(text) =>this.handleChange(text)}
              placeholder="name"
          />
          <Button round uppercase color="error"  onPress={() => navigation.navigate("Quiz"),{ name: this.state.name }} title="Quiz">Quiz</Button>
        </View>  
        )}  
    }
         {/*   <Button round uppercase color="error"  onPress={() => navigation.navigate("Quiz"),{ username: this.state.username }} title="Quiz">Quiz</Button>
     */}
  
export default Name;