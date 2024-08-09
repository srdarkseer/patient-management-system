import * as React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./HomeStackNavigator"; // Ensure the path is correct
import HistoryScreen from "./screens/HistoryScreen";
import PatientsScreen from "./screens/PatientsScreen";
import SettingScreen from "./screens/SettingScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("../../assets/images/navigation/home.png")
              : require("../../assets/images/navigation/home.png");
          } else if (route.name === "Patients") {
            iconName = focused
              ? require("../../assets/images/navigation/patients.png")
              : require("../../assets/images/navigation/patients.png");
          } else if (route.name === "History") {
            iconName = focused
              ? require("../../assets/images/navigation/history.png")
              : require("../../assets/images/navigation/history.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("../../assets/images/navigation/settings.png")
              : require("../../assets/images/navigation/settings.png");
          }

          return (
            <Image
              source={iconName}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyTabs />
    </SafeAreaView>
  );
}
