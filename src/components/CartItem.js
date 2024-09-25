import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CartItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.modality}>{item.modality}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <MaterialCommunityIcons name="delete" size={35} color={colors.primary} />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        marginVertical:10,
        padding:20,
        borderRadius:10,
        width:"90%",
        marginHorizontal:"5%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end"
    },
    containerText:{
        gap:10,
    },
    title:{
        fontFamily:"letter",
        fontSize:15,
        color:colors.tertiary
    },
    modality:{
        fontFamily:"letter",
        color:colors.tertiary
    },
    price:{
        color:colors.tertiary,
        fontWeight:"bold",
        fontSize:18
    },
})