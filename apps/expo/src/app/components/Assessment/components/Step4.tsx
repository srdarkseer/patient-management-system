import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Step4: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Confirm the results</Text>
      <View style={styles.results}>
        <Text style={styles.resultText}>Question 1: Correct</Text>
        <Text style={styles.resultText}>Question 2: Correct</Text>
        <Text style={styles.resultText}>Question 3: Incorrect</Text>
        <Text style={styles.resultText}>Question 4: Correct</Text>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButton} onPress={onPrevious}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onNext}>
          <Text style={styles.navButtonText}>Print</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  question: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },
  results: {
    flex: 1,
    justifyContent: "center",
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  navButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 8,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Step4;
