import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const TrackingScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Get the current location without explicitly requesting permission
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);

        // Perform geocoding to get the location name
        const geocodingResult = await reverseGeocode(location.coords);
        setLocationName(geocodingResult);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    fetchLocation();
  }, []);

  const handleSearch = async () => {
    try {
      const searchLocation = await Location.geocodeAsync(searchQuery);

      if (searchLocation && searchLocation.length > 0) {
        const result = searchLocation[0];

        setCurrentLocation({
          latitude: result.latitude,
          longitude: result.longitude,
        });

        const readableAddress = [result.subregion, result.city, result.region, result.country].filter(Boolean).join(', ');
        setLocationName(readableAddress);
      } else {
        console.log('Search result is empty.');
      }
    } catch (error) {
      console.error('Error during location search:', error);
    }
  };



  // Function to reverse geocode coordinates to a location name
  // Function to reverse geocode coordinates to a location name
  const reverseGeocode = async (coords) => {
    try {
      const geocoding = await Location.reverseGeocodeAsync(coords);
  
      if (geocoding && geocoding.length > 0) {
        const result = geocoding[0];
        console.log('Full Geocoding Result:', result);
  
        // Construct a readable address using available fields
        const readableAddress = [result.district, result.city, result.region, result.country].filter(Boolean).join(', ');
        console.log('Readable Address:', readableAddress);
  
        return readableAddress;
      } else {
        console.log('Geocoding result is empty.');
        return 'Unknown Location';
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
      return 'Error getting location name';
    }
  };
  
  


  return (
    <View style={styles.container}>
       <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search location..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
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

      {locationName && (
        <View style={styles.locationNameContainer}>
          <Text style={styles.locationNameText}>{locationName}</Text>
        </View>
      )}
    </View>
  );
};

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
  locationNameContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  locationNameText: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default TrackingScreen;
