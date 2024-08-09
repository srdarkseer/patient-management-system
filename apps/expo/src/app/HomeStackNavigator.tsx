import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AssessmentStepper from "./screens/AssessmentStepper";
import HomeScreen from "./screens/HomeScreen";
import NewAssessment from "./screens/NewAssessment";

const Stack = createNativeStackNavigator();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewAssessment"
        component={NewAssessment}
        options={{ title: "New Assessment" }}
      />
      <Stack.Screen
        name="AssessmentStepper"
        component={AssessmentStepper}
        options={{ title: "AssessmentStepper" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
