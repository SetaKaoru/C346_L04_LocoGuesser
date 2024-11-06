import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";



const LocoGuesser = (corrAnswer)=> {
    const [answer, setAnswer] = useState('');

    let score = 0;

    const Question = ({picture}) => {
        return (
            <View>
                <Image source={picture} style={{width: 500, height: 350}}/>
                <Text>Where is this engine from?</Text>
                <RNPickerSelect  onValueChange={(value) => {setAnswer(value);}}
                                 items={[
                                     {label: 'England', value: 'England'},
                                     {label: 'America', value: 'America'},
                                     {label: 'Scotland', value: 'Scotland'},
                                     {label: 'Japan', value: 'Japan'},
                                     {label: 'Indonesia', value: 'Indonesia'}
                                 ]}
                />
            </View>
        );
    }

    return (
        <View style={{padding: 20, paddingTop: 50}}>
            <ScrollView>
                <Text>{score}</Text>
                <Text><Icon name="train" size={50} color="#B23B23" />LOCOGUESSER</Text>
                <Question
                    corrAnswer="Indonesia"
                    picture={require('./img/indo.jpg')}
                />
                <Question
                    corrAnswer="England"
                    picture={require('./img/school.jpg')}
                />
                <Question
                    corrAnswer="America"
                    picture={require('./img/k4.jpg')}
                />
                <Question
                    corrAnswer="Scotland"
                    picture={require('./img/812.jpg')}
                />
                <Question
                    corrAnswer="England"
                    picture={require('./img/toby.png')}
                />
                <Question
                    corrAnswer="Japan"
                    picture={require('./img/d52.jpg')}
                />
            </ScrollView>
            <Button title='Button' onPress={() => {
                if (answer == corrAnswer) {
                    score+=1
                }
                let message = "A";
                if (score == 6) {
                    message = "Congratulations! You got all correct! ＼(＾▽＾)／"
                }
                if (score >= 1, score <= 5) {
                    message = "You got" + " " + score + " " + "answers correct!"
                }
                if (score == 0) {
                    message = `You got no answers correct! (｡•́︿•̀｡)`
                }
            ToastAndroid.show(message, ToastAndroid.SHORT)
            }}>
            </Button>
        </View>
    )
}



export default LocoGuesser;
