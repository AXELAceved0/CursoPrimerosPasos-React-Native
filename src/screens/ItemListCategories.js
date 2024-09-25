import { FlatList, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import product from '../data/product.json'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'

const ItemListCategories = ({ route }) => {
  const {categories} = route.params
  const [productFiltered, setProductFiltered] = useState([])

  useEffect(() => {
    setProductFiltered(product.filter(products => products.categories === categories.name))
  }, [categories])

  const onSearch = (input) => {
    if (!input) {
      setProductFiltered(product.filter(products => products.categories === categories.name))
    } else {
      setProductFiltered(productFiltered.filter(product => product.title.includes(input)))
    }
  }
  return (
    <>
      {/* <Search onSearch={onSearch} /> */}
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