import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { TouchableOpacity } from 'react-native'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={decrement}>
                <Text style={styles.button}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity>
                <Text style={styles.button} onPress={increment}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.secondary,
        borderRadius: 100,
        width: "70%",
        marginHorizontal: "15%",
        marginVertical: 20,
        padding: 10
    },
    button: {
        padding: 20,
        color: colors.tertiary,
        fontSize: 25,
    },
    count: {
        color: colors.tertiary,
        fontSize: 25,
        textAlign: "center",
        minWidth: 50,
    }
})