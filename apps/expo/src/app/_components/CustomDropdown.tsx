import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface CustomDropdownProps {
  label: string;
  selectedValue: string;
  options: { label: string; value: string }[];
  onValueChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  selectedValue,
  options,
  onValueChange,
}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={options}
        value={selectedValue}
        placeholder={{ label: `Select ${label.toLowerCase()}`, value: null }}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
          iconContainer: styles.iconContainer,
        }}
        Icon={() => {
          return <Text style={styles.icon}>▼</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    paddingRight: 30, // To ensure the icon is inside the input
    fontSize: 16,
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
  icon: {
    fontSize: 18,
    color: "#333",
  },
});

export default CustomDropdown;
