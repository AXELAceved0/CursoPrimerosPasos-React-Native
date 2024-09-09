import { StyleSheet, View } from 'react-native'

const ShadowWrapper = ({ style, children }) => {
    return (
        <View style={[styles.shadow, style]}>
            {children}
        </View>
    )
}

export default ShadowWrapper

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
})