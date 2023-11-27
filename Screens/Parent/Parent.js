import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ParentScreen = () => {
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
        <Text style={styles.cardTitle}>Contact Person</Text>
        <TextInput
          style={styles.input}
          placeholder="Contact person..."
          value={ate}
          onChangeText={(text) => setAte(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Can Be reached At</Text>
        <TextInput
          style={styles.input}
          placeholder="Reached at..."
          value={ate}
          onChangeText={(text) => setAte(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>How Did Your Child Sleep Last Night?</Text>
        <RNPickerSelect
          onValueChange={(itemValue) => setMood(itemValue)}
          items={[
            { label: '😄 Slept well', value: '😄' },
            { label: '😢 Not well', value: '😢' },
            { label: '😐 Was normal', value: '😐' },
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
        <Text style={styles.cardTitle}>Child's Mood</Text>
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
        <Text style={styles.cardTitle}>Any New Bumps or Bruises?</Text>
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
        <Text style={styles.cardTitle}>Time of Last Feeding</Text>
        <TextInput
          style={styles.input}
          placeholder="Time of last feeding..."
          value={diaperChange}
          onChangeText={(text) => setDiaperChange(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Medication Today</Text>
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
        <Text style={styles.cardTitle}>Bowel Movement</Text>
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
        <Text style={styles.cardTitle}>What Time Will Your Child Be Picked Up?</Text>
        <TextInput
          style={styles.input}
          placeholder="What time will your child be picked up?..."
          value={comments}
          onChangeText={(text) => setComments(text)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Comments</Text>
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
    marginTop:20
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
    fontSize: 30,
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
});

export default ParentScreen;
