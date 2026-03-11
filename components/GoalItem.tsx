import { StyleSheet, Text, View, Pressable} from 'react-native';
import type { CourseGoal } from  'types/types'

export function GoalItem(item:CourseGoal, onDeleteItem:(goalId:number)=>void) {
    
    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={() => onDeleteItem(item.id)}
                android_ripple={{color:'#b93131'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>Id:{item.id} | {item.val}</Text>
            </Pressable>
        </View>
        
    )


};

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#BACBA9'
    },
    goalText:{
        padding: 8,
    },
    pressedItem:{
        opacity:0.5
    }
});