import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, ScrollView, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";


const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'column',
        backgroundColor: 'mistyrose',
        margin: 10,
        borderWidth: 1
    },
    Question: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        maxWidth: 400,
        backgroundColor: 'honeydew',
        marginTop: 15
    },
    QN: {
        marginTop: 8,
        fontWeight: 'bold',
        width: 350,
        color: 'white',
        backgroundColor: 'indianred',
        textAlign: 'center',
        fontSize: 22,
        borderWidth: 1
    },
    Name: {
        flex: 1,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 40,
        marginTop: 20,
        fontWeight: 'bold',
        backgroundColor: 'ghostwhite'
    },
});


const Question = ({ corrAnswer, picture, index, setAnswers }) => {

    const handleChange = (value) => {
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = value; // Set the answer for the current question
            return updatedAnswers;
        });
    };

    return (
        <View style={styles.Question}>
            <Image source={picture} style={{ width: 490, height: 350, borderWidth: 1 }} />
            <Text style={styles.QN}>Where is this Engine from?</Text>
            <RNPickerSelect
                onValueChange={handleChange}
                items={[
                    { label: 'England', value: 'England' },
                    { label: 'America', value: 'America' },
                    { label: 'Scotland', value: 'Scotland' },
                    { label: 'Japan', value: 'Japan' },
                    { label: 'Indonesia', value: 'Indonesia' }
                ]}
            />
        </View>
    );
}

const LocoGuesser = () => {
    const [answers, setAnswers] = useState(Array(6).fill('')); // Array to hold the answers
    const [score, setScore] = useState(0);

    const questions = [
        { corrAnswer: "Indonesia", picture: require('./img/indo.jpg') },
        { corrAnswer: "England", picture: require('./img/black5.jpg') },
        { corrAnswer: "America", picture: require('./img/k4.jpg') },
        { corrAnswer: "Scotland", picture: require('./img/812.jpg') },
        { corrAnswer: "England", picture: require('./img/toby.png') },
        { corrAnswer: "Japan", picture: require('./img/d52.jpg') },
        { corrAnswer: "England", picture: require('./img/school.jpg') }
    ];

    const handleSubmit = () => {
        let correctAnswers = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].corrAnswer) {
                correctAnswers++;
            }
        });

        setScore(correctAnswers); // Set the final score

        let message = '';
        if (correctAnswers === 7) {
            message = "Well done! You got all correct! ＼(＾▽＾)／";
        } else if (correctAnswers >= 1 && correctAnswers <= 6) {
            message = `You got ${correctAnswers}/7 answers correct!`;
        } else {
            message = `You got no answers correct! (｡•́︿•̀｡)`;
        }

        Alert.alert('Results', message);
    };

    return (
        <View style={[styles.parentView, {paddingBottom: 25}]}>
            <ScrollView>
                <Text>{score}</Text>
                <Text style={styles.Name}>
                    <Icon name="train" size={35} color="#B23B23" />
                    LOCOGUESSER
                </Text>

                {questions.map((question, index) => (
                    <Question
                        key={index}
                        corrAnswer={question.corrAnswer}
                        picture={question.picture}
                        index={index}
                        setAnswers={setAnswers}
                    />
                ))}
            </ScrollView>
            <Button title="Submit Answers" onPress={handleSubmit}/>
        </View>
    );
}

export default LocoGuesser;
