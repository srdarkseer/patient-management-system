import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

const Step5: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Confirm the results</Text>
      <View style={styles.resultsContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={12 / 18}
          progressColor={"#0ea671"}
          backgroundColor={"#e0e0e0"}
        />
        <View style={styles.divider} />
        <View style={styles.results}>
          <View style={styles.resultRow}>
            <Text style={styles.questionText}>Question 1:</Text>
            <Text style={[styles.answerText, styles.correct]}>Correct</Text>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.questionText}>Question 2:</Text>
            <Text style={[styles.answerText, styles.correct]}>Correct</Text>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.questionText}>Question 3:</Text>
            <Text style={[styles.answerText, styles.incorrect]}>Incorrect</Text>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.questionText}>Question 4:</Text>
            <Text style={[styles.answerText, styles.correct]}>Correct</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.showAll}>Show all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButtonBack} onPress={onPrevious}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonContinue} onPress={onNext}>
          <Text style={styles.navButtonTextContinue}>Print</Text>
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
  resultsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
  },
  progressCircle: {
    height: 150,
    width: 150,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  results: {
    flex: 1,
    width: "100%",
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  questionText: {
    fontSize: 16,
  },
  answerText: {
    fontSize: 16,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
  showAll: {
    color: "orange",
    marginTop: 8,
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

export default Step5;
