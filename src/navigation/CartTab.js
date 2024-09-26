import { StyleSheet, FlatList, View, Text } from 'react-native';
import cart from "../data/cart.json";
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';
import { TouchableOpacity } from 'react-native';

const CartTab = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <FlatList
                    data={cart.items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CartItem item={item} />}
                />
            </View>
            <View style={styles.containerConfirm}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={styles.totalAmount}>${cart.total}</Text>
                    <Text style={styles.total}>Total</Text>
                </View>
                <TouchableOpacity>
                <Text style={styles.confirmButton}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.tertiary, 
    },
    container: {
        flex: 1,
        backgroundColor: 'white',        
        borderBottomRightRadius: 90,    
        borderBottomLeftRadius: 90,              
    },
    containerConfirm: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 120,                      
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color:colors.secondary
    },
    total:{
        fontSize:18,
        width:"100%",
        textAlign:"center",
        color:colors.lleters,
        fontFamily:"letter"
    },
    confirmButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 20,
        color: "white",
        fontFamily:"letter",
    },
});
