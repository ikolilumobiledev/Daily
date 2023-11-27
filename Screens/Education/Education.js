import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const EducationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kids Education</Text>

      {/* Educational Content in Cards */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Learning the Alphabet</Title>
          <Paragraph>
            Introduce your child to the alphabet. Teach them the letters and their associated sounds.
            Use colorful and interactive materials to make learning fun.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Counting and Numbers</Title>
          <Paragraph>
            Help your child learn to count and recognize numbers. Use toys, books, and games to make
            learning numbers an enjoyable experience.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Storytime</Title>
          <Paragraph>
            Reading stories to your child is an excellent way to enhance their vocabulary and
            imagination. Make storytime a daily ritual.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Arts and Crafts</Title>
          <Paragraph>
            Encourage creativity through arts and crafts. Provide coloring materials and let your
            child's imagination run wild.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Educational Apps and Games</Title>
          <Paragraph>
            Explore educational apps and games that are both fun and instructive. These apps can
            reinforce learning in an engaging way.
          </Paragraph>
        </Card.Content>
      </Card>

      {/* Additional Educational Content in Cards */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Science and Exploration</Title>
          <Paragraph>
            Foster a sense of curiosity by introducing your child to science and exploration. Visit museums,
            conduct simple experiments, and explore the world around you.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Music and Rhythm</Title>
          <Paragraph>
            Encourage musical creativity and rhythm. Provide musical instruments or simply play music and dance
            with your child to the beat.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Outdoor Adventures</Title>
          <Text >
            Spending time outdoors is essential for your child's development. Explore parks, go on nature walks,
            and enjoy outdoor games.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFC0CB', // Pink background color
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt:{
    color:"white",
    fontSize:20
  }
});

export default EducationScreen;


