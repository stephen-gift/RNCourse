import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [goalArray, setGoalArray] = useState([]);

 

  function addGoalHandler(enteredGoalText) {
    setGoalArray((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler() {
    console.log("DELETE")
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalArray}
          renderItem={(itemList) => {
            return <GoalItem text={itemList.item.text} onDeleteItem={deleteGoalHandler}/>;
          }}
          keyExtractor={(itemList, index) => itemList.id}
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
 
  goalsContainer: {
    flex: 5,
  },
});
