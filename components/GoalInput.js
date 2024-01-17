import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function onAddGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={onAddGoalHandler} />
          <Button title="Cancel" onPress={props.oncancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 16,
    gap:20,
    width: '100%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    padding: 8,
    width: "100%",
  },buttonContainer:{
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-evenly',
  }
});
