import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,  View,FlatList, Image } from 'react-native';
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
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.appContainer}>
        <Image 
          source={require('assets/goal.png')}
          style={styles.headerImage}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#717568',
    alignItems:'center'
  },
  goalsContainer:{
    flex: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignSelf: 'stretch'
  },
  headerImage:{
    width:100,
    height:100,
  }
});
