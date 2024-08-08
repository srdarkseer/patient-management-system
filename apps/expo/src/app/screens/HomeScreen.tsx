import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import Home from "../components/Home/Home";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const data = {
    recentHistory: [
      {
        id: 1,
        code: "Z00.00",
        title: "Physical Examination",
        name: "Emerson Calzoni",
        gender: "Male",
        age: 36,
        weight: "84 kg",
        date: "02.03.2024",
      },
      {
        id: 2,
        code: "Z01.89",
        title: "Diagnostic Tests",
        name: "Davis Culhane",
        gender: "Male",
        age: 41,
        weight: "84 kg",
        date: "01.03.2024",
      },
    ],
    recentAssessments: [
      {
        id: 1,
        title: "Cognition - SLUMS",
      },
      {
        id: 2,
        title: "Z00.00 - Physical Examination",
      },
      {
        id: 3,
        title: "Z01.89 - Diagnostic Tests",
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Home
          recentHistory={data.recentHistory}
          recentAssessments={data.recentAssessments}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("NewAssessment")}
        >
          <Text style={styles.buttonText}>+ New assessment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    margin: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;
