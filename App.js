import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import Checklist from "./src/Pages/Checklist";

const Stack = createStackNavigator();

const AppStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checklist" component={Checklist} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
  );
};

