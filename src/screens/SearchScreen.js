import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Search from '../components/Search';
import product from '../data/product.json'; // Asegúrate de que la ruta sea correcta

const SearchScreen = () => {
    const [productFiltered, setProductFiltered] = useState(product); // Mostrar todos los productos al inicio

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            const filteredProducts = product.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProductFiltered(filteredProducts);
        } else {
            setProductFiltered(product); // O lo que sea tu array original
        }
    };

    return (
        <View>
            <Search onSearch={handleSearch} />
            <FlatList
                data={productFiltered}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default SearchScreen;
