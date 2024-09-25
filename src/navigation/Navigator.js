import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartTab from './CartTab';
import OrderTab from './OrderTab';
import TabBarIcons from '../components/TabBarIcons';
import { colors } from '../global/colors';
import { SafeAreaView, View,StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        headerStyle: styles.headerStyle,
                        headerTitleAlign: 'center',
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTintColor: colors.lleters,
                        contentStyle: styles.contentContainer,
                        tabBarStyle: {
                            backgroundColor: colors.secondary,
                            height: 60
                        }
                    }}
                    sceneContainerStyle={{
                        backgroundColor: colors.lleters
                    }}
                >
                    <Tab.Screen
                        name='HomeTab'
                        component={ShopStack}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={[
                                    styles.iconContainer,
                                    focused ? styles.iconContainerFocused : null,
                                ]}>
                                    <TabBarIcons
                                        text="Inicio"
                                        icon="home"
                                        color={focused ? colors.lleters : colors.primary}
                                        textStyle={{
                                            color: focused ? colors.lleters : colors.primary,
                                        }}
                                    />
                                </View>
                            ),
                            headerShown:false,
                        }}
                    />
                    <Tab.Screen name='CartTab'
                        component={CartTab}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={[
                                    styles.iconContainer,
                                    focused ? styles.iconContainerFocused : null,
                                ]}>
                                    <TabBarIcons
                                        text="Carrito"
                                        icon="shopping-cart"
                                        color={focused ? colors.lleters : colors.primary}
                                        textStyle={{
                                            color: focused ? colors.lleters : colors.primary,
                                        }}
                                    />
                                </View>
                            ),
                            title:"Carrito",
                            headerShown:true,
                        }}
                    />
                    <Tab.Screen name='OrderTab'
                        component={OrderTab}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={[
                                    styles.iconContainer,
                                    focused ? styles.iconContainerFocused : null,
                                ]}>
                                    <TabBarIcons
                                        text="orden"
                                        icon="list-alt"
                                        color={focused ? colors.lleters : colors.primary}
                                        textStyle={{
                                            color: focused ? colors.lleters : colors.primary,
                                        }}
                                    />
                                </View>
                            ),
                            title:"Ordenes",
                            headerShown:true
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    iconContainer: {
        width: 55,
        height: 50,  
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainerFocused: {
        backgroundColor: colors.primary,
        borderRadius: 30,
    },
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


