import { FlatList, StyleSheet, Text, View } from 'react-native'
import orders from "../data/orders.json"
import OrderItem from '../components/OrderItem'

const OrderTab = () => {
    return (
        <View>
            <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({item}) => <OrderItem item={item}/>}
            />
        </View>
    )
}

export default OrderTab

const styles = StyleSheet.create({})