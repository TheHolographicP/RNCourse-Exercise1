import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

type CourseGoal = {
  id: number
  val: string
}

export default function App() {
  const [goalInputText, setGoalInputText] = useState('')
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([])

  function goalInputHandler(enteredText: string)
  {
    setGoalInputText(enteredText)
  }
  function addGoalHandler()
  {
    var Id = courseGoals.length + 1

    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
      {
        id: Id,
        val: goalInputText
      }
      
    ])
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
          (item) => (
            <View style={styles.goalItem}>
              <Text>Id:{item.item.id} | {item.item.val}</Text>
            </View>
          )
        }
        keyExtractor={(item, index) => {
          return item.id.toString()
        }}
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
