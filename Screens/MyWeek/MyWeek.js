import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

const MyWeekScreen = () => {
  const [theme, setTheme] = useState('');
  const [shape, setShape] = useState('');
  const [color, setColor] = useState('');
  const [letter, setLetter] = useState('');
  const [number, setNumber] = useState('');
  const [rhyme, setRhyme] = useState('');
  const [interaction, setInteraction] = useState('');
  const [learningActivities, setLearningActivities] = useState('');
  const [songOrRhymeSuggestion, setSongOrRhymeSuggestion] = useState('');
  const [commentsAndReminders, setCommentsAndReminders] = useState('');

  const submitForm = () => {
    const formData = {
      theme,
      shape,
      color,
      letter,
      number,
      rhyme,
      interaction,
      learningActivities,
      songOrRhymeSuggestion,
      commentsAndReminders,
    };

    console.log(formData); // Replace this with your data handling logic
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
        <View style={styles.titleContainer}> 
            <Text style={styles.titleText}>
                WELCOME TO MY WEEK IN A NUTSHELL
            </Text>
        </View>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.formtitle}>Theme of the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setTheme(text)}
            value={theme}
            placeholder="Enter theme"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>Shape of the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setShape(text)}
            value={shape}
            placeholder="Enter shape"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>Colour of the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setColor(text)}
            value={color}
            placeholder="Enter color"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>Letter of the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setLetter(text)}
            value={letter}
            placeholder="Enter letter"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}> Number of the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setNumber(text)}
            value={number}
            placeholder="Enter number"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>Rhyme or song of the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setRhyme(text)}
            value={rhyme}
            placeholder="Enter rhyme or song"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>While playing outside and interacting with others I:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setInteraction(text)}
            value={interaction}
            placeholder="Describe interactions"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}> During the following activities, I learnt:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setLearningActivities(text)}
            value={learningActivities}
            placeholder="List learning activities"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>Can you suggest a song/rhyme/activities for the week:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setSongOrRhymeSuggestion(text)}
            value={songOrRhymeSuggestion}
            placeholder="Suggest a song or activity"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.formtitle}>Comments and reminders:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setCommentsAndReminders(text)}
            value={commentsAndReminders}
            placeholder="Add comments and reminders"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={submitForm }>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FAF7F0',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    elevation: 7,
    marginRight:20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 8,
    marginBottom: 8,
    fontSize:15
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal:40,
    marginTop:40
  },
  formtitle:{
    fontSize:17,
    fontWeight:'bold'
  },
  submitButton: {
    backgroundColor: '#EA047E',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginRight:15
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
});

export default MyWeekScreen;
