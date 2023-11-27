import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const navigateToStore = () => {
    navigation.navigate('Stores');
  };

  return (
    <ImageBackground
      source={require('../../assets/cart.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Ameriless</Text>
        <Text style={styles.subtitle}>Shop effortlessly</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToStore}>
        <Text style={styles.buttonText}>Go to Stores</Text>
        <Icon name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginHorizontal: 90,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
});

export default Home;






// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Swiper from 'react-native-swiper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Home = ({ navigation }) => {
//   const handleSkip = () => {
//     // Navigate to the login screen
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <Swiper style={styles.wrapper} showsButtons={false}>
//         <View style={styles.slide}>
//           <ImageSlider source={require('../../assets/cart.jpg')} />
//         </View>
//         <View style={styles.slide}>
//           <ImageSlider source={require('../../assets/pla.jpg')} />
//         </View>
//         <View style={styles.slide}>
//           <ImageSlider source={require('../../assets/kid.jpg')} />
//           {/* Add an arrow here */}
//           <TouchableOpacity style={styles.arrowButton} onPress={handleSkip}>
//             <Icon name="arrow-right" size={30} color="white" />
//           </TouchableOpacity>
//         </View>
//         {/* Add more slides with different images here */}
//       </Swiper>
//       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//         <Text style={styles.skipText}>Skip</Text>
//       </TouchableOpacity>
      
//       <Text style={{color:'yellow', marginBottom:40}}>
//           wertyuiop
//         </Text>
     
//     </View>
//   );
// };

// const ImageSlider = ({ source }) => (
//   <Image
//     source={source}
//     style={styles.imageBackground}
//     resizeMode="cover"
//   />
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   wrapper: {},
//   slide: {
//     flex: 1,
//     position: 'relative', // Add this to position the arrow button
//   },
//   imageBackground: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   skipButton: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     backgroundColor: 'transparent',
//     padding: 10,
//     fontSize: 25,
//     color: 'salmon',
//     fontWeight: 'bold',
//   },
//   skipText: {
//     fontSize: 25,
//     color: 'salmon',
//     fontWeight: 'bold',
//   },
//   arrowButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: 'transparent',
//     marginRight:40,
//     marginBottom:30
//   },
// });

// export default Home;
