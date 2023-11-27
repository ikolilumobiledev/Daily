import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HealthScreen = () => {
  const openExternalLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kids Health</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Health Tips</Title>
          <Paragraph>
            Encourage your child to eat a balanced diet and stay hydrated. Regular physical
            activity and a good night's sleep are essential for their well-being.
          </Paragraph>
          <TouchableOpacity onPress={() => openExternalLink('https://example.com/health-tips')}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Common Illnesses</Title>
          <Paragraph>
            Learn about common childhood illnesses like the flu, cold, and allergies. Recognize
            symptoms and how to provide care.
          </Paragraph>
          <TouchableOpacity onPress={() => openExternalLink('https://example.com/common-illnesses')}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Vaccinations</Title>
          <Paragraph>
            Stay up to date with your child's vaccination schedule. Vaccines protect them from
            serious diseases.
          </Paragraph>
          <TouchableOpacity onPress={() => openExternalLink('https://example.com/vaccinations')}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>First Aid Kit</Title>
          <Paragraph>
            Keep a well-equipped first aid kit at home. Be prepared to handle minor injuries and
            accidents.
          </Paragraph>
          <TouchableOpacity onPress={() => openExternalLink('https://example.com/first-aid-kit')}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Consult a Pediatrician</Title>
          <Paragraph>
            If your child shows persistent health issues or unusual symptoms, consult a pediatrician.
            Their expertise is crucial for your child's health.
          </Paragraph>
          <TouchableOpacity onPress={() => openExternalLink('https://example.com/consult-pediatrician')}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
  <Card.Content>
    <Title style={styles.cardTitle}>Healthy Snacking</Title>
    <Paragraph>
      Teach your child about healthy snacking habits. Provide nutritious snacks like fruits, vegetables,
      and yogurt to keep them energized.
    </Paragraph>
    <TouchableOpacity onPress={() => openExternalLink('https://example.com/healthy-snacking')}>
      <Text style={styles.readMore}>Read More</Text>
    </TouchableOpacity>
  </Card.Content>
</Card>

<Card style={styles.card}>
  <Card.Content>
    <Title style={styles.cardTitle}>Physical Activity</Title>
    <Paragraph>
      Encourage physical activity through games and outdoor play. It helps in the development of motor skills
      and keeps your child active.
    </Paragraph>
    <TouchableOpacity onPress={() => openExternalLink('https://example.com/physical-activity')}>
      <Text style={styles.readMore}>Read More</Text>
    </TouchableOpacity>
  </Card.Content>
</Card>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal:100
  },
  card: {
    backgroundColor: '#FFC0CB', // Pink background color
    marginBottom: 20,
   
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  readMore: {
    color: 'red',
    marginTop: 10,
  },
});

export default HealthScreen;
