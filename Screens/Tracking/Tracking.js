import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const TrackingScreen = () => {
  // State to store the current location
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Function to fetch and set the user's current location
    const fetchLocation = async () => {
      try {
        // Request foreground location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          // Get the current location
          const location = await Location.getCurrentPositionAsync({});
          // Set the current location in state
          setCurrentLocation(location.coords);
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    // Call the function to fetch the location
    fetchLocation();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <View style={styles.container}>
      {currentLocation ? (
        <MapView
          style={styles.map}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Current Location"
          />
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Export the component
export default TrackingScreen;

