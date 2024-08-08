import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BsArrowRight } from "react-icons/bs";

interface RecentHistoryProps {
  data: any[];
}

const RecentHistory: React.FC<RecentHistoryProps> = ({ data }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent History</Text>
        <Text style={styles.linkText}>
          See more <BsArrowRight />
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.elevation]}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemCode}>{item.code}</Text>
              <Text style={styles.separator}> • </Text>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {item.gender} • {item.age} years old • {item.weight}
            </Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
    borderRadius: 24,
    padding: 8,
  },
  itemCode: {
    color: "#1e3a8a",
    fontSize: 14,
    fontWeight: "800",
  },
  separator: {
    color: "#1e3a8a",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  itemName: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
  },
  itemDetails: {
    color: "#6b7280",
    fontSize: 14,
  },
  itemDate: {
    color: "#6b7280",
    fontSize: 14,
  },
});

export default RecentHistory;
