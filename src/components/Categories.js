import { FlatList, StyleSheet } from 'react-native'
import CategoriesItem from './categoriesItem.js'
import { useSelector } from 'react-redux'

const Categories = () => {
    const categories = useSelector((state => state.shop.categories))
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({ item }) => <CategoriesItem item={item}/>}
            numColumns={2}
            contentContainerStyle={styles.list}
            
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
        paddingBottom:"10%",
    }
})