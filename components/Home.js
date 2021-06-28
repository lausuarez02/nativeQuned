import React, {useState} from "react";
import { ScrollView } from "react-native";
import { View ,StyleSheet,TouchableOpacity} from "react-native";
import {Button, Text, Input, Block } from 'galio-framework';

///importing 




function Home({navigation}){
    return(
		<View style={styles.container}>
			<Button round uppercase color="error" style={styles.boton} onPress={() => navigation.navigate("Quiz")} title="Quiz">Quiz</Button>
			<TouchableOpacity activeOpacity={1.95} style={styles.button}/>
			<Button round uppercase color="error" style={styles.boton} onPress={() => navigation.navigate("Preguntas")} title="Preguntas" >Preguntas</Button>
		
	</View>
	)	
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:"black",
       height:"100%",
      
		
	},
	boton:{
		marginLeft:90,
		marginRight: 80,
		marginTop: 80,
		backgroundColor:"red",
	}
  
	 
  
})


export default Home;