import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Step1: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How many fingers do you see?</Text>
      <Text style={styles.instruction}>
        Please show the patient a certain amount of fingers and follow their
        reaction.
      </Text>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === "Correct" && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect("Correct")}
      >
        <Text>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === "Incorrect" && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect("Incorrect")}
      >
        <Text>Incorrect</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedOption: {
    borderColor: "orange",
  },

  button: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Step1;
