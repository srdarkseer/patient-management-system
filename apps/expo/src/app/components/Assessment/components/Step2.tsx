import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Step2: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Story "Jill went to the shop"</Text>
      <Text style={styles.instruction}>
        Jill went to the shop to buy candies. Afterwards instead of walking to
        home, she...
      </Text>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOptions.includes("Jill bought candies.") &&
            styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect("Jill bought candies.")}
      >
        <View style={styles.optionContent}>
          <Ionicons
            name={
              selectedOptions.includes("Jill bought candies.")
                ? "checkmark-circle"
                : "ellipse-outline"
            }
            size={24}
            color={
              selectedOptions.includes("Jill bought candies.")
                ? "orange"
                : "gray"
            }
          />
          <Text style={styles.optionText}>Jill bought candies.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOptions.includes("Jill has a dog as a pet.") &&
            styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect("Jill has a dog as a pet.")}
      >
        <View style={styles.optionContent}>
          <Ionicons
            name={
              selectedOptions.includes("Jill has a dog as a pet.")
                ? "checkmark-circle"
                : "ellipse-outline"
            }
            size={24}
            color={
              selectedOptions.includes("Jill has a dog as a pet.")
                ? "orange"
                : "gray"
            }
          />
          <Text style={styles.optionText}>Jill has a dog as a pet.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOptions.includes("Jill took a cab.") && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect("Jill took a cab.")}
      >
        <View style={styles.optionContent}>
          <Ionicons
            name={
              selectedOptions.includes("Jill took a cab.")
                ? "checkmark-circle"
                : "ellipse-outline"
            }
            size={24}
            color={
              selectedOptions.includes("Jill took a cab.") ? "orange" : "gray"
            }
          />
          <Text style={styles.optionText}>Jill took a cab.</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButtonBack} onPress={onPrevious}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonContinue} onPress={onNext}>
          <Text style={styles.navButtonTextContinue}>Continue</Text>
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
  selectedOption: {
    borderColor: "orange",
    borderWidth: 2,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginTop: "auto",
  },
  navButtonBack: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  navButtonContinue: {
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    flex: 1,
    marginLeft: 8,
  },
  navButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  navButtonTextContinue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Step2;
