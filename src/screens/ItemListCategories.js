import { FlatList, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Counter from '../components/Counter'
import { useSelector } from 'react-redux'

const ItemListCategories = ({ route }) => {
  const product = useSelector((state => state.shop.product))
  const {categories} = route.params
  const [productFiltered, setProductFiltered] = useState([])

  useEffect(() => {
    setProductFiltered(product.filter(products => products.categories === categories.name))
  }, [categories])

  return (
    <>
    {/* <Counter /> */}
      <FlatList
        data={productFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem product={item}
        />
        }
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({})