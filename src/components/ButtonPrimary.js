import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import { TouchableOpacity } from 'react-native'

const ButtonPrimary = ({ children, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.tertiary,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "60%",
        marginHorizontal: "20%"
    },
    text: {
        fontSize: 16,
        width: "100%",
        textAlign: "center",
        color: colors.lleters,
        fontFamily: "letter",
        fontWeight: "bold"
    }
})