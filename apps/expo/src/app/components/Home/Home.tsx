import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RecentAssessments from "./components/RecentAssessments";
import RecentHistory from "./components/RecentHistory";

interface HomeProps {
  recentHistory: any[];
  recentAssessments: any[];
}

const Home: React.FC<HomeProps> = ({ recentHistory, recentAssessments }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.nameText}>Dr. Johnson</Text>
        </View>
        <View>
          <Text style={styles.dateText}>Monday</Text>
          <Text style={styles.dateValueText}>16 April, 2024</Text>
        </View>
      </View>
      <RecentHistory data={recentHistory} />
      <RecentAssessments data={recentAssessments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  welcomeText: {
    color: "#6b7280",
    fontSize: 12,
    fontWeight: "500",
  },
  nameText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "700",
  },
  dateText: {
    color: "#6b7280",
    fontSize: 12,
    fontWeight: "500",
  },
  dateValueText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Home;
