import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BsArrowRight } from "react-icons/bs";

interface RecentAssessmentsProps {
  data: any[];
}

const RecentAssessments: React.FC<RecentAssessmentsProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Assessments</Text>
        <Text style={styles.linkText}>
          See more <BsArrowRight />
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.elevation]}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "700",
  },
  linkText: {
    color: "#3b82f6",
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  elevation: {
    elevation: 7,
  },
  itemTitle: {
    color: "#ea580c",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default RecentAssessments;
