import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// import { BsFilter, BsSearch } from "react-icons/bs";

const historyData = [
  {
    id: 1,
    code: "M9901",
    title: "Cognition",
    name: "John Smith",
    gender: "Male",
    age: 32,
    weight: "84 kg",
    date: "04.03.2024",
  },
  {
    id: 2,
    code: "Z00.00",
    title: "Physical Examination",
    name: "Emerson Calzoni",
    gender: "Male",
    age: 36,
    weight: "84 kg",
    date: "02.03.2024",
  },
  {
    id: 3,
    code: "Z01.89",
    title: "Diagnostic Tests",
    name: "Davis Culhane",
    gender: "Male",
    age: 41,
    weight: "84 kg",
    date: "01.03.2024",
  },
];

const HistoryScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(historyData);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text) {
      const newData = historyData.filter((item) => {
        const itemData = `${item.code.toUpperCase()} ${item.title.toUpperCase()} ${item.name.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(historyData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
      </View>
      <View style={styles.searchContainer}>
        {/* <BsSearch style={styles.searchIcon} /> */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.filterButton}>
          {/* <BsFilter style={styles.filterIcon} /> */}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemCode}>{item.code}</Text>
                <Text>{" • "}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
    color: "#6b7280",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterButton: {
    marginLeft: 8,
  },
  filterIcon: {
    color: "#6b7280",
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
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

export default HistoryScreen;
