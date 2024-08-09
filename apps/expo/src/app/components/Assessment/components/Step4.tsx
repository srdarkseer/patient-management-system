import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

const Step4: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: boolean;
  }>({
    Chicken: false,
    Horse: false,
    Dog: false,
  });

  const handleToggleSwitch = (option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Identify the animals</Text>
      <Text style={styles.instruction}>
        Please show the patient the following animals and check their response.
      </Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Chicken</Text>
        <Switch
          onValueChange={() => handleToggleSwitch("Chicken")}
          value={selectedOptions.Chicken}
          thumbColor={selectedOptions.Chicken ? "orange" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#ffddcc" }}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Horse</Text>
        <Switch
          onValueChange={() => handleToggleSwitch("Horse")}
          value={selectedOptions.Horse}
          thumbColor={selectedOptions.Horse ? "orange" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#ffddcc" }}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Dog</Text>
        <Switch
          onValueChange={() => handleToggleSwitch("Dog")}
          value={selectedOptions.Dog}
          thumbColor={selectedOptions.Dog ? "orange" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#ffddcc" }}
        />
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButtonBack} onPress={onPrevious}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonContinue} onPress={onNext}>
          <Text style={styles.navButtonTextContinue}>Finish</Text>
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
  optionContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
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

export default Step4;
