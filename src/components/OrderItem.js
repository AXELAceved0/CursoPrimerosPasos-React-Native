import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../global/colors';
import { TouchableOpacity } from 'react-native';

const OrderItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
            <Text style={styles.date}>{new Date(item.createdAt).toLocaleString('es-AR')}</Text>
            <Text style={styles.text}>Total: ${item.total}</Text>
            </View>
            <TouchableOpacity>
            <FontAwesome name="search" size={30} color={colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        padding:20,
        borderRadius:10,
        width:"90%",
        marginHorizontal:"5%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        borderWidth:5,
        borderColor:colors.secondary
    },
    containerText:{
        gap:15,
    },
    date:{
        color:colors.primary,
        fontSize:17,
        width:"100%"
    },
    text:{
        color:colors.primary,
        fontFamily:"letter",
        fontSize:20
    }
})