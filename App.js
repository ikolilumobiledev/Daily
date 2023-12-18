import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login/Logins';
import Home from './Screens/Home/Home';
import BottomTabNavigator from './Screens/BottomTap/BottomTapNavigator';
import WelcomeScreen from './Screens/Communication/Welcome';
import WishlistScreen from './Screens/Health/Wishlist';
import EducationScreen from './Screens/Education/Profile';
import TrackingScreen from './Screens/Tracking/Tracking';
import TeacherScreen from './Screens/Teacher/Teacher';
import ParentScreen from './Screens/Parent/Parent';
import CheckoutScreen from './Screens/Checkout /Checkout';
import FoodScreen from './Screens/Food/Food';
import MyWeekScreen from './Screens/MyWeek/MyWeek';
import MemoriesScreen from './Screens/Memories/Memories';
import Stores from './Screens/Stores/Store';
import CartScreen from './Screens/Cart/Cart';
import PaymentScreen from './Screens/Payment/Payment';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Login"  options={{ headerShown: false }}  component={Login} />
        <Stack.Screen name="BottomTapNavigator" component={BottomTabNavigator} /> 
        <Stack.Screen name="Welcome"  options={{ headerShown: false }}  component={WelcomeScreen} /> 
        <Stack.Screen name="Tracking" options={{ headerShown: false }} component={TrackingScreen} /> 
        <Stack.Screen name="Education" component={EducationScreen} /> 
        <Stack.Screen name="Wishlist" options={{ headerShown: false }} component={WishlistScreen} /> 
        <Stack.Screen name="Teacher" component={TeacherScreen} /> 
        <Stack.Screen name="Parent" options={{ headerShown: false }} component={ParentScreen} /> 
        <Stack.Screen name="Food" options={{ headerShown: false }} component={FoodScreen} /> 
        <Stack.Screen name="MyWeek" options={{ headerShown: false }} component={MyWeekScreen} /> 
        <Stack.Screen name="Memories" options={{ headerShown: false }} component={MemoriesScreen} /> 
        <Stack.Screen name="Stores" options={{ headerShown: false }} component={Stores} /> 
        <Stack.Screen name="Cart" options={{ headerShown: false }} component={CartScreen} /> 
        <Stack.Screen name="Checkout" options={{ headerShown: false }} component={CheckoutScreen} /> 
        <Stack.Screen name="Payment" options={{ headerShown: false }} component={PaymentScreen} /> 

        {/* <Stack.Screen name="History" options={{ headerShown: false }} component={HistoryScreen} />  */}


        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

