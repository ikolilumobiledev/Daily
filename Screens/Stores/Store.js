import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Stores = () => {
  const navigation = useNavigation();

  const popularStores = [
    'Amazon', 'eBay', 'Walmart', 'Academy', 'K.mart', 'Belk', 'Best Buy', 'Overstock',
    'Bed & Bath', 'Marshall', 'Micro center', 'Old Navy', 'Ross', 'Sally beauty', 'Victoria Secret',
    'Wayfair', 'Macy\'s', 'H&M', 'Forever 21', 'Home Depot',
  ];

  const navigateToLogin = () => {
    // Navigate to the login screen here
    // For example, using React Navigation:
    navigation.navigate('Login');
  };

  const renderStoreCard = ({ item }) => (
    <TouchableOpacity style={styles.storeCard} onPress={navigateToLogin}>
      <Text style={styles.storeName}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Online Stores</Text>
      <FlatList
        data={popularStores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderStoreCard}
        numColumns={2} // Set the number of columns to 2
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginHorizontal: 55,
    marginBottom: 30,
  },
  storeCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Add elevation for a card-like effect (Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  storeName: {
    fontSize: 18,
  },
});

export default Stores;
