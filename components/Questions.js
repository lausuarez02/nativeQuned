import React, {useState} from "react";

import {Button, View ,StyleSheet, Text,FlatList,SectionList,StatusBar,SafeAreaView} from "react-native";
import {ScrollView} from "react-native";
import Quiz from "./Quiz";
import { Accordion, Block } from 'galio-framework';


/*
function Questions(){
    const [currentQuestion, setCurrentQuestion] = useState(0);


    const questions = [
        {
			title: 'What is the capital of France?',
			
		},
		{
			title: 'Who is CEO of Tesla?',
			
		},
		{
			title: 'The iPhone was created by which company?',
			
		},
		{
			title: 'How many Harry Potter books are there?',
			
		},
	];
	const Item = ({ title }) => (
		<View>
		  <Text>{title}</Text>
		</View>
	  );

 //  
 var valen = []
        for(let i = 0; i < questions.length; i++){
			valen.push(
				questions[i]  
	 //  <SectionList
         
	  //renderItem={() => <Text style={styles.item}>{questions[i].questionText}</Text>}
	 
	 ///>
		   
			)
        }
		
    return(
     <View>
	  <SectionList
      sections={valen}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
     </View>
    )
}

const styles = StyleSheet.create({
	container:{
		width: 300,
        height: 500,
        backgroundColor: 'white',
        margin: 50,
		justifyContent:"space-between"
	},
})
*/
const DATA = [
	{
	  title: "'What is the capital of France?'",
	  content: "Paris o esta",
	  //data: ["Tony Stark", "Bill Gates", "Elon Musk", "Jeff Bezos"]
	},
	{
	  title: "Sides",
	  content: "Paris o esta",
	 // data: ["French Fries", "Onion Rings", "Fried Shrimps"]
	},
	{
	  title: "Drinks",
	  content: "Paris o esta",
	//  data: ["Water", "Coke", "Beer"]
	},
	{
	  title: "Desserts",
	  content: "Paris o esta",
	//  data: ["Cheese Cake", "Ice Cream"]
	}
  ];
  const data = [
	{ title: "First Chapter", content: "Lorem ipsum dolor sit amet", 
	  icon: {
		name: 'keyboard-arrow-up',
		family: 'material',
		size: 16,
	  } 
   },
	{ title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
	{ title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ];
  /*function Uno(){
	  for(let i = 0; i < DATA; i++){
		  return <Block style={{ height: 200 }}>
		  <Accordion dataArray={DATA[i]} />
		</Block>
	  }*/
  
const Item = ({ title }) => (
	<View style={styles.item}>
	  <Text style={styles.title}>{title}</Text>
	</View>
  );
  
  const Questions = () => (
	<SafeAreaView style={styles.container}>
	 {/* <SectionList
		sections={DATA}
		keyExtractor={(item, index) => item + index}
		renderItem={({ item }) => <Item title={item} />}
		renderSectionHeader={({ section: { title } }) => (
		  <Text style={styles.header}>{title}</Text>
		)}
		/>*/}
	  
	  <Block style={{ height: "100%", width:100 }}>
  <Accordion dataArray={DATA} />
</Block>
	</SafeAreaView>
  );
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  paddingTop: StatusBar.currentHeight,
	  marginHorizontal: 16
	},
	item: {
	  backgroundColor: "#f9c2ff",
	  padding: 20,
	  marginVertical: 8
	},
	header: {
	  fontSize: 32,
	  backgroundColor: "#fff"
	},
	title: {
	  fontSize: 24
	}
  });
export default Questions;