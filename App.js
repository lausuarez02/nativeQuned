import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { Text } from 'galio-framework'

//importing components
import Home from "./components/Home.js";
import Quiz from "./components/Quiz.js";
import Questions from "./components/Questions.js";
import Name from "./components/name.js";
import Landing from "./components/landing.js";


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="First">
       <Stack.Screen name="First" component={First} options={{headerShown: false}}/>
       <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Quiz" component={Quiz}/>
       <Stack.Screen name="Preguntas" component={Questions}/>
       <Stack.Screen name="Name" component={Name}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
