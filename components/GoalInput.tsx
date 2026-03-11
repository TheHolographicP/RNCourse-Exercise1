import { useState } from 'react';
import { StyleSheet,  View, Button, TextInput, GestureResponderEvent } from 'react-native';''

interface GoalInputProps {
    onAddGoal: (goal: string) => void;
}

export function GoalInput({ onAddGoal }: GoalInputProps) {
    const [goalInputText, setGoalInputText] = useState('')

    function goalInputHandler(enteredText: string): void {
        setGoalInputText(enteredText)
    }

    function goalSubmitHandler(): void {
        onAddGoal(goalInputText)
        setGoalInputText('')
    }

    function callAddGoal(): void {
        onAddGoal(goalInputText)
        setGoalInputText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal"
                style={styles.goalInput}
                onChangeText={goalInputHandler}
                value={goalInputText}
                onSubmitEditing={goalSubmitHandler}
            />
            <Button title="Add Goal" onPress={callAddGoal}/>
        </View>
    )
};

const styles = StyleSheet.create({
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
});