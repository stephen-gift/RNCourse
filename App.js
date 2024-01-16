import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goalArray, setGoalArray] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoalArray((currentGoals) => [...currentGoals, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goals"
          onChangeText={goalInputHandler}
        />
        <Button
          style={styles.button}
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalArray}
          renderItem={(itemList) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} >
                {itemList.item}
              </Text>
            </View>
          )}
          keyExtractor={itemList =>itemList.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    flex: 1.5,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
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
