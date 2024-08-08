import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step3: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.question}>Recall question:</Text>
        <Text style={styles.instruction}>Read the sentences</Text>
        <Text style={styles.paragraph}>
          Proin ultrices fringilla et scelerisque sed duis massa nulla. Eget
          arcu urna ipsum in neque ornare. Integer placerat rhoncus purus est ut
          ultrices. Pharetra amet faucibus tincidunt mattis in enim. Duis
          pharetra integer adipiscing quisque elementum lacus porta. Sit diam
          aliquam quisque purus tortor.
        </Text>
        <Text style={styles.paragraph}>
          Ut turpis consectetur massa libero. Habitant lobortis dictum pretium
          et tortor facilisi in enim porttitor. Purus porta pulvinar sit
          ultrices aliquam ultrices lacus quam. Gravida etiam facilisis enim
          purus ornare quis donec leo dignissim. Etiam at non aliquam quis.
        </Text>
        <Text style={styles.paragraph}>
          Pellentesque pellentesque at amet vitae turpis hac in. Felis eu purus
          vel interdum accumsan lorem dictu.
        </Text>
      </ScrollView>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButtonBack} onPress={onPrevious}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonContinue} onPress={onNext}>
          <Text style={styles.navButtonTextContinue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },
  instruction: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
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
    color: "#fff",
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

export default Step3;
