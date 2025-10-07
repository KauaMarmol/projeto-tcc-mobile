import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  //Aula Grazi
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const API = "http://192.170.0.129:3000/api"; //substituir o ip pelo ip do ipconfig do backend
    const URL = `${API}/user`;
    console.log(URL);
    setLoading(true);

    try {
      const response = await fetch(URL);
      const json = await response.json();
      console.log(json)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
  //Final

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
