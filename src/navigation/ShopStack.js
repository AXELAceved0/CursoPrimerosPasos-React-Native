import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetail';
import { colors } from '../global/colors';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: styles.headerStyle,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTintColor: colors.lleters,
                    contentStyle: styles.contentContainer,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Inicio' }}
                />
                <Stack.Screen
                    name="Product"
                    component={ItemListCategories}
                    options={({ route }) => ({
                        title: typeof route.params?.categories === 'string' ? route.params.categories : "Curso"
                    })}
                />
                <Stack.Screen
                    name="Detail"
                    component={ItemDetail}
                    options={{ title: 'Detalles' }}
                />
            </Stack.Navigator>
        </>
    )
}

export default ShopStack

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTitleStyle: {
        fontSize: 30,
        color: colors.lleters,
    },
    contentContainer: {
        backgroundColor: '#FFFFFF',
    },
});
