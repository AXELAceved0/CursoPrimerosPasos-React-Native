import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const ButtonPrimary = ({children,onPress}) => {
    return (
        <Pressable style={styles.button}>
            <Pressable onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
            </Pressable>
        </Pressable>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.tertiary,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "60%",
        marginHorizontal: "20%"
    },
    text:{
        fontSize: 16,
        width: "100%",
        textAlign: "center",
        color: colors.lleters,
        fontFamily:"letter",
        fontWeight:"bold"
    }
})