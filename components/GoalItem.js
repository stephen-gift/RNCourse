import { StyleSheet, Text, View } from "react-native";

export default function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemList.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "green",
  },
  goalText: {
    color: "white",
  },
});
