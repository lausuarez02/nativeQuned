import React, {useState} from "react";
import { ScrollView } from "react-native";
import {  View ,StyleSheet,TextInput,ImageBackground,Image,TouchableOpacity} from "react-native";
import { Text,Accordion, Button } from 'galio-framework';
import { render } from "react-dom";


const Landing = ({navigation}) => {
    return(
        <View style={{width:"100%"}}>
               
          <ImageBackground style={{width: '100%', height: '100%'}} source={require("../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg")}>
          <Text h2 style={{color:"white", textAlign:"center",  marginTop:"40%"}}>Quned</Text>

          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Home")}> 
              <Image source={require("../assets/2cd43b_31092ddb74e54d3b8a21cf9055aa9f5a_mv2.png")} style={{ marginTop:"80%", marginLeft: "40%" ,resizeMode: "cover",height: 100,width: 200}}/>
          </TouchableOpacity>
          
    </ImageBackground>
        </View>
    )
}

export default Landing;