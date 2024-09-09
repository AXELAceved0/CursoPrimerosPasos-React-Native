import { FlatList, StyleSheet } from 'react-native'
import categories from '../data/categories.json'
import CategoriesItem from './categoriesItem.js'

const Categories = () => {
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