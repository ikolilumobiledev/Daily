import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const TeacherScreen = () => {
  const [ate, setAte] = useState('');
  const [mood, setMood] = useState('😄');
  const [drank, setDrank] = useState('');
  const [needs, setNeeds] = useState('');
  const [napped, setNapped] = useState('Select mode');
  const [napFrom, setNapFrom] = useState('');
  const [napTo, setNapTo] = useState('');
  const [diaperChange, setDiaperChange] = useState('');
  const [bowelImprovement, setBowelImprovement] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    const formData = {
      ate,
      mood,
      drank,
      needs,
      napped,
      napFrom,
      napTo,
      diaperChange,
      bowelImprovement,
      comments,
    };

    // You can perform actions with the formData object here, such as submitting it to a server
    console.log('Form Data:', formData);

    // Reset the form if needed
    setAte('');
    setMood('😄');
    setDrank('');
    setNeeds('');
    setNapped('Select mode');
    setNapFrom('');
    setNapTo('');
    setDiaperChange('');
    setBowelImprovement('');
    setComments('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today I ate...</Text>
        <TextInput
          style={styles.input}
          placeholder="Today I ate..."
          value={ate}
          onChangeText={(text) => setAte(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today I was...</Text>
        <RNPickerSelect
          onValueChange={(itemValue) => setMood(itemValue)}
          items={[
            { label: '😄 Happy', value: '😄' },
            { label: '😐 Neutral', value: '😐' },
            { label: '😢 Sad', value: '😢' },
          ]}
          value={mood}
          style={{
            inputIOS: styles.select,
            inputAndroid: styles.select,
            iconContainer: styles.selectIcon,
          }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today I drank...</Text>
        <TextInput
          style={styles.input}
          placeholder="Today I drank..."
          value={drank}
          onChangeText={(text) => setDrank(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>I need...</Text>
        <TextInput
          style={styles.input}
          placeholder="I need..."
          value={needs}
          onChangeText={(text) => setNeeds(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today I napped</Text>
        <RNPickerSelect
          onValueChange={(itemValue) => setNapped(itemValue)}
          items={[
            { label: 'No', value: 'No' },
            { label: 'Yes', value: 'Yes' },
          ]}
          value={napped}
          style={{
            inputIOS: styles.select,
            inputAndroid: styles.select,
            iconContainer: styles.selectIcon,
          }}
        />
      </View>

      {napped === 'Yes' && (
        <View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nap From...</Text>
            <TextInput
              style={styles.input}
              placeholder="From..."
              value={napFrom}
              onChangeText={(text) => setNapFrom(text)}
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nap To...</Text>
            <TextInput
              style={styles.input}
              placeholder="To..."
              value={napTo}
              onChangeText={(text) => setNapTo(text)}
            />
          </View>
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Diaper Change...</Text>
        <TextInput
          style={styles.input}
          placeholder="Diaper change..."
          value={diaperChange}
          onChangeText={(text) => setDiaperChange(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bowel Movement...</Text>
        <RNPickerSelect
          onValueChange={(itemValue) => setNapped(itemValue)}
          items={[
            { label: 'No', value: 'No' },
            { label: 'Yes', value: 'Yes' },
          ]}
          value={napped}
          style={{
            inputIOS: styles.select,
            inputAndroid: styles.select,
            iconContainer: styles.selectIcon,
          }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Comments...</Text>
        <TextInput
          style={styles.input}
          placeholder="Comments..."
          value={comments}
          onChangeText={(text) => setComments(text)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 25,
    marginBottom: 10,
    color:'#EA047E'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    fontSize:20
  },
  select: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#EA047E',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  select: {
    fontSize: 30,
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },
});

export default TeacherScreen;
