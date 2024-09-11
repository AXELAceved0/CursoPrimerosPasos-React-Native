import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { colors } from '../global/colors'
import ButtonPrimary from './ButtonPrimary'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({ product }) => {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/secretariadoJuridico.jpg")}
                resizeMode='center'
            />
            <View style={styles.containerText}>
                <Text style={[styles.title, width > 359 ? styles.titleMin : styles.titleMax]}>
                    {product.title}
                </Text>
                <Text style={styles.price}>
                    ${product.price}
                </Text>
            </View>
            <ButtonPrimary onPress={() => navigation.navigate('Detail', { id: product.id })}>Ver Detalles
            </ButtonPrimary>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        height: "100%",
        backgroundColor: colors.secondary
    },
    image: {
        width: "100%",
        maxHeight: 600,
        minHeight: 200,
    },
    containerText: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: colors.tertiary,
        fontFamily: "letter",
    },
    titleMax: {
        fontSize: 30
    },
    titleMin: {
        fontSize: 22
    },
    price: {
        fontSize: 20,
        width: "100%",
        textAlign: "center",
        color: colors.tertiary,
        fontWeight: "bold"
    },
})