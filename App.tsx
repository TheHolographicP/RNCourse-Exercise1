import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {
  const [goalInputText, setGoalInputText] = useState('')


  function goalInputHandler(enteredText: string)
  {
    setGoalInputText(enteredText)
  }
  function addGoalHandler()
  {
    console.log(goalInputText)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.goalInput} onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>Big list of goals</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap:10,
    alignItems: 'center',
    marginBottom: 16
  },
  goalInput:{
    flex: 1,
    borderWidth: 1,
    padding:3
  },
  goalsContainer:{
    flex: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1
  }
});
