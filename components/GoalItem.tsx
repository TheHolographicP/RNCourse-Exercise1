import { StyleSheet, Text, View} from 'react-native';
import type { CourseGoal } from  'types/types'

export function GoalItem(item:CourseGoal) {
    return (
    <View style={styles.goalItem}>
        <Text>Id:{item.id} | {item.val}</Text>
    </View>
    )


};

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#BACBA9'
    }
});