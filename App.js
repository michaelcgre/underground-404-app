import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import React, { useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={"#715C83"} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
