import { StyleSheet, Text, View } from 'react-native'
import product from '../data/product.json'

const ItemDetail = ({ route }) => {
  const {id} = route.params
  return (
    <>
      <View style={styles.containerProduct}>
        <Text>{product[id].title}</Text>
      </View>
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  containerProduct: {
    flex: 1,
  }
})