import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Step2: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Story "Jill went to the shop"</Text>
      <Text style={styles.instruction}>
        Jill went to the shop to buy candies. Afterwards instead of walking to
        home, she...
      </Text>
      <TouchableOpacity style={styles.option}>
        <Text>Jill bought candies.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text>Jill has a dog as a pet.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text>Jill took a cab.</Text>
      </TouchableOpacity>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButton} onPress={onPrevious}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onNext}>
          <Text style={styles.navButtonText}>Continue</Text>
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
  instruction: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
  },
  option: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
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

export default Step2;
