import { useState } from 'react';
import { StyleSheet,  View, Button, TextInput, Text, Modal, Pressable } from 'react-native';''

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

            <View>
                <Pressable onPress={callAddGoal} style={({pressed}) => pressed ? styles.addGoalButtonPressed : styles.addGoalButton}>
                    <Text>Add Goal</Text>
                </Pressable>
            </View>
            
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
        borderRadius: 6,
        padding:7,
        borderColor: '#E1F4CB',
    },
    addGoalButton: {
        backgroundColor:"#F1BF98",
        borderRadius: 6,
        padding: 8
    },
    addGoalButtonPressed: {
        backgroundColor:"#b18d72",
        borderRadius: 6,
        padding: 8
    }
});