import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupPage from './qwabe/screens/authentication/SignUp'; // Corrected import path
import Login from './qwabe/screens/authentication/Login'; // Corrected import path
import ForgotPassword from './qwabe/screens/authentication/ForgotPassword'; // Corrected import path
import Dashboard from './qwabe/screens/DashBoard';
import Modules from './qwabe/screens/Modules';
import Quiz from './qwabe/screens/Quiz'; // Corrected import path
import StudyTips from './qwabe/screens/StudyTips'; // Corrected import path
import Tests from './qwabe/screens/Tests'; // Corrected import path
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Modules" component={Modules} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
        <Stack.Screen name="StudyTips" component={StudyTips} options={{ headerShown: false }} />
        <Stack.Screen name="Tests" component={Tests} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/back1.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Image source={require('./assets/md-logo.png')} style={styles.logo} />
        <Text style={styles.appName}>ModuleSync</Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    width: '100%',
  },
  logo: {
    width: 190,
    height: 90,
    borderRadius: 80, 
    marginBottom: 5,
  },
  appName: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white', 
  },
  getStartedButton: {
    backgroundColor: 'lightblue', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
  },
  getStartedText: {
    fontSize: 18,
    color: 'black', 
    fontWeight: 'bold',
  },
});
