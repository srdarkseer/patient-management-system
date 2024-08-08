import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const NewAssessment: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [cognitiveStatus, setCognitiveStatus] = useState("");
  const [measures, setMeasures] = useState("");
  const [patient, setPatient] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New assessment</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Cognitive status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={cognitiveStatus}
            onValueChange={(itemValue) => setCognitiveStatus(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select cognitive status" value="" />
            <Picker.Item label="Cognition" value="cognition" />
            {/* Add more options here */}
          </Picker>
        </View>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Applicable measures</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={measures}
            onValueChange={(itemValue) => setMeasures(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select applicable measures" value="" />
            <Picker.Item label="SLUMS" value="slums" />
            {/* Add more options here */}
          </Picker>
        </View>
      </View>
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
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  picker: {
    height: 50,
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
