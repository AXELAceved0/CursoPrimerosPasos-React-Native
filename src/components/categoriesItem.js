import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import ShadowWrapper from './ShadowWrapper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const CategoriesItem = ({ item }) => {
    const navigation = useNavigation()
    return (
        <Pressable style={{ marginHorizontal: '2%', flex: 1 }}  onPress={() => navigation.navigate('Product',{categories:item})}>
            <ShadowWrapper style={styles.container} >
                <View style={styles.icon}>
                    <MaterialCommunityIcons name={item.icon} size={35} color={colors.secondary} />
                </View>
                <Text style={styles.text}>{item.name}</Text>
            </ShadowWrapper>
        </Pressable>
    )
}

export default CategoriesItem

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        padding: 15,
        marginVertical: 10
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: '2.5%',
        marginTop: 16,
        borderRadius: 12,
        paddingVertical: 90,
        alignItems: "center",
        backgroundColor: colors.secondary,
    },
    text: {
        color: colors.tertiary,
        fontSize: 15,
        fontFamily:"letter",
        width: "100%",
        textAlign: "center",

    }
})