import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Search = ({ onSearch }) => {

    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handleInputChange = (t) => {
        setInput(t)
    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () => {
        const regex = /^[a-zA-Z]+$/;
        if (!regex.test(input)) {
            setError('Entrada inválida: solo se permiten letras.')
        } else {
            setError("")
            onSearch(input)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    placeholder='Buscar Curso'
                    style={styles.input}
                    placeholderTextColor={colors.tertiary}
                    value={input}
                    onChangeText={handleInputChange}
                />
                <Pressable onPress={search}>
                    <FontAwesome name="search" size={22} color={colors.tertiary} style={styles.icon} />
                </Pressable>
                <Pressable onPress={handleRemoveInput}>
                    <FontAwesome6 name="delete-left" size={24} color={colors.tertiary} style={styles.icon} />
                </Pressable>
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    containerInput: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flex: 1,
        backgroundColor: colors.lleters,
        padding: 10,
        marginLeft: '2%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.tertiary,
        fontFamily:"letter"
    },
    icon: {
        margin: 5
    },
    error: {
        color: colors.tertiary,
        fontWeight: "bold",
        marginLeft: 15,
        fontSize: 15,
        fontFamily:"letter",
        marginBottom: 5
    }
})