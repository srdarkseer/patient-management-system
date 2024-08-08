import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import CustomDropdown from "../_components/CustomDropdown";

const NewAssessment: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [cognitiveStatus, setCognitiveStatus] = useState("");
  const [measures, setMeasures] = useState("");
  const [patient, setPatient] = useState("");

  const cognitiveOptions = [
    { label: "Cognition", value: "cognition" },
    // Add more options here
  ];

  const measuresOptions = [
    { label: "SLUMS", value: "slums" },
    // Add more options here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New assessment</Text>
      <CustomDropdown
        label="Cognitive status"
        selectedValue={cognitiveStatus}
        options={cognitiveOptions}
        onValueChange={setCognitiveStatus}
      />
      <CustomDropdown
        label="Applicable measures"
        selectedValue={measures}
        options={measuresOptions}
        onValueChange={setMeasures}
      />
      <View style={styles.field}>
        <Text style={styles.label}>Patient</Text>
        <TextInput
          placeholder="Enter patient name or ID"
          value={patient}
          onChangeText={setPatient}
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AssessmentStepper")}
      >
        <Text style={styles.buttonText}>Start assessment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 24,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    padding: 12,
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

export default NewAssessment;
