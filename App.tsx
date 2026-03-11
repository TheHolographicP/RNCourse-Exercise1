import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,  View,FlatList } from 'react-native';
import type {CourseGoal} from 'types/types'

import { GoalItem } from 'components/GoalItem'
import { GoalInput } from 'components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([])

  function addGoalHandler(goalInputText:string)
  {
    var Id = courseGoals.length + 1

    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
      {
        id: Id,
        val: goalInputText
      }
      
    ])
  }

  function deleteGoalHandler(goalId:number)
  {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.id !== goalId)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
        style={styles.goalsContainer}
        data={courseGoals}
        renderItem={
          (item) => (
            GoalItem(item.item, deleteGoalHandler)
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
  goalsContainer:{
    flex: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1
  },

});
