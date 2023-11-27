// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import Carousel from 'react-native-snap-carousel';

// const WelcomeScreen = ({ navigation }) => {
//   const markedDates = {
//     '2023-11-10': { marked: true, dotColor: 'pink' },
//     '2023-11-15': { marked: true, dotColor: 'green' },
//     '2023-11-20': { marked: true, dotColor: 'red' },
//   };

//   const navigateToParentScreen = () => {
//     navigation.navigate('Parent'); // Navigate to the "Parent" screen
//   };

//   const navigateToTeacherScreen = () => {
//     navigation.navigate('Teacher'); // Navigate to the "Teacher" screen
//   };
//   const navigateToMyWeekScreen = () => {
//     navigation.navigate('MyWeek'); // Navigate to the "Teacher" screen
//   };
//   const navigateToMemoriesScreen = () => {
//     navigation.navigate('Memories'); // Navigate to the "Teacher" screen
//   };
//   const navigateToFoodScreen = () => {
//     navigation.navigate('Food'); // Navigate to the "Teacher" screen
//   };

//   const images = [
//     require('../../assets/akata.jpg'),
//     require('../../assets/write.jpg'),
//     require('../../assets/nice.jpg'),
//     require('../../assets/pretty.jpg'),
//     require('../../assets/kente.jpg'),
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.calendarContainer}>
//         <Calendar
//           markedDates={markedDates}
//           markingType={'multi-dot'}
//           theme={{
//             textDayFontFamily: 'Arial',
//             textMonthFontFamily: 'Arial',
//             textDayHeaderFontFamily: 'Arial',
//             textDayFontSize: 16,
//             textMonthFontSize: 20,
//             textDayHeaderFontSize: 16,
//           }}
//         />
//       </View>
//       <Carousel
//         data={images}
//         renderItem={({ item }) => (
//           <ImageBackground source={item} style={styles.carouselImage} />
//         )}
//         sliderWidth={320}
//         itemWidth={320}
//         autoplay={true}
//         autoplayInterval={5000}
//       />
//       <View style={styles.cardContainer}>
//         <TouchableOpacity onPress={navigateToParentScreen}>
//           <ImageBackground
//             source={require('../../assets/heart.jpeg')}
//             style={styles.heartImage}
//           >
//             <Text style={styles.cardText}>Parent</Text>
//           </ImageBackground>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={navigateToTeacherScreen}>
//           <ImageBackground
//             source={require('../../assets/heart.jpeg')}
//             style={styles.heartImage}
//           >
//             <Text style={styles.cardText}>Teacher</Text>
//           </ImageBackground>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.cardContainer}>
//   <TouchableOpacity onPress={navigateToParentScreen}>
//     <View style={styles.roundedRectangle2}>
//       <Text style={styles.cardText1}>Message</Text>
//     </View>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={navigateToMyWeekScreen}>
//     <View style={styles.roundedRectangle3}>
//       <Text style={styles.cardText1}>My Week</Text>
//     </View>
//   </TouchableOpacity>
// </View>

//       <View style={styles.cardContainer}>
//       <View style={styles.cardContainer}>
//   <TouchableOpacity onPress={navigateToMemoriesScreen}>
//     <View style={styles.roundedRectangle1}>
//       <Text style={styles.cardText1}>Memories</Text>
//     </View>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={navigateToFoodScreen}>
//     <View style={styles.roundedRectangle}>
//       <Text style={styles.cardText1}>Food</Text>
//     </View>
//   </TouchableOpacity>
// </View>
//       </View>
     
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderRadius: 40,
//   },
//   heartImage: {
//     width: 120,
//     height: 120,
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   cardText: {
//     fontSize: 16,
//     color: 'red',
//     fontSize: 17,
//     marginBottom: 10,
//   },
//   calendarContainer: {
//     margin: 20,
//     width: '80%',
//   },
//   carouselImage: {
//     width: 320,
//     height: 190,
//     borderRadius: 10,
//     margin: 10,
//   },
//   cardText1: {
//     color: 'black',
//     fontSize: 17,
//     marginBottom: 10,
//     marginLeft:22,
//     marginRight:10,
//   },
//   roundedRectangle: {
//     width: 180,
//     height: 110,
//     backgroundColor: '#99DDCC', // Customize the background color
//     borderRadius: 20, // Adjust the border radius to control roundness
//     borderBottomRightRadius: 0, // Set one end to be flat
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   roundedRectangle1: {
//     width: 180,
//     height: 110,
//     backgroundColor: '#A0E9FF', // Customize the background color
//     borderRadius: 20, // Adjust the border radius to control roundness
//     borderBottomRightRadius: 0, // Set one end to be flat
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   roundedRectangle2: {
//     width: 180,
//     height: 110,
//     backgroundColor: '#D2E0FB', // Customize the background color
//     borderRadius: 20, // Adjust the border radius to control roundness
//     borderBottomRightRadius: 0, // Set one end to be flat
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   roundedRectangle3: {
//     width: 180,
//     height: 110,
//     backgroundColor: '#BEADFA', // Customize the background color
//     borderRadius: 20, // Adjust the border radius to control roundness
//     borderBottomRightRadius: 0, // Set one end to be flat
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
// });

// export default WelcomeScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const WelcomeScreen = ({ navigation }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product', {
          params: {
            url: 'https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762'
          },
          headers: {
            'X-RapidAPI-Key': 'c405fd3db2msh3116a34419e8f39p195801jsn1102261dc031',
            'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
          }
        });
        setProductData(response.data);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardContainer: {
    justifyContent: 'space-between',
    borderRadius: 40,
  },
  heartImage: {
    width: 120,
    height: 120,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardText: {
    fontSize: 17,
    color: 'red',
    marginBottom: 10,
  },
});

export default WelcomeScreen;
