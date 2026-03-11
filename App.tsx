import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';



export default function App() {
  const [goalInputText, setGoalInputText] = useState('')
  const [courseGoals, setCourseGoals] = useState<string[]>([])

  function goalInputHandler(enteredText: string)
  {
    setGoalInputText(enteredText)
  }
  function addGoalHandler()
  {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalInputText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.goalInput} onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <FlatList 
        style={styles.goalsContainer}
        data={courseGoals}
        renderItem={
          ({item}) => (
            <View key={item} style={styles.goalItem}>
              <Text>{item}</Text>
            </View>
          )
        }
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#717568'
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
    padding:3,
    borderColor: 'white',
  },
  goalsContainer:{
    flex: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#BACBA9'
  }
});
