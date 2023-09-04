import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./Screens/DetailsScreen";
import SearchScreen from "./Screens/SearchScreen";

const Stack = createNativeStackNavigator();

const AppEntry: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppEntry;
