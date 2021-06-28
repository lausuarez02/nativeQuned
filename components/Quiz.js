
import React, {useState} from "react";
import { ScrollView } from "react-native";
import {  View ,StyleSheet,TextInput} from "react-native";
import { Text,Accordion, Button } from 'galio-framework';
import { render } from "react-dom";



function Quiz(){

	
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [correct, setCorrect] = useState(false)
	
	const handleAnswerOptionClickk = (isCorrect) => {
        if(isCorrect && questions.length >= 0 ){
			setCorrect(true)
		} else {
			setCorrect(false)
		}}
    const handleAnswerOptionClick = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1);
			
			}
			

			const nextQuestion = currentQuestion + 1;
			if(nextQuestion < questions.length){
				setCurrentQuestion(nextQuestion);
				
			}else{
				setShowScore(true); }
	} ;

/*	render()
	{
		const {state} = this.props.navigation;
		const oneeee = <Text>{(state.params.name)}</Text>
   */ return(
		
        <ScrollView>
        <View >
		
		
			{ showScore ? (
            <Text h3 style={{textAlign:"center", display:"flex", justifyContent:"center"}}>You scored {score} out of {questions.length}</Text>
			):( <View><Text h4 style={{textAlign: "center"}}>Question {currentQuestion + 1}</Text>
       
				<Text style={{marginTop: 50,textAlign: "center"}} h6>{questions[currentQuestion].questionText}</Text>
			   
								 <Text  style={{position: 'relative',
								 height: 100,
								 alignItems: 'center',
								 justifyContent: 'center',marginBottom: 80,
								 }}>{questions[currentQuestion].answerOptions.map((answerOption) => (
								 <Button onPress={() => {handleAnswerOptionClick(answerOption.isCorrect); {handleAnswerOptionClickk()}}  }   >{answerOption.answerText}</Button>	
										
										))}
										 
							   </Text> 
							   <Text h5 style={{textAlign: "center"}}>You are scoring {score} out of {questions.length}</Text>
							   </View>)}
							   
							
       
					  
					  
					  	
					  </View>
                            </ScrollView>
    );
}

const styles = StyleSheet.create({
	ahora:{
		alignItems: "center",display:"flex", justifyContent:"center", marginLeft:50, marginRight:50, marginTop: 100
	},
    container: {
      display:"flex",
	  justifyContent: "center",
	  alignItems: "center",
      backgroundColor: '#fff',
      
	  width: "100%",
	  height: 500,
	  
	  fontSize:20,
      //justifyContent: 'center',
    },
	boton: {
		height: "200px",
	},
  });

  export default Quiz;