import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { colors } from '../global/colors'
import ButtonPrimary from './ButtonPrimary'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({ product }) => {
    const { width } = useWindowDimensions()
    const navigation = useNavigation()

    const imageWidth = width * 1.4;
    const imageHeight = imageWidth * 0.72;
    return (
        <View style={styles.container}>
            <Image
                style={[styles.image, { width: imageWidth, height: imageHeight }]}
                source={require("../../assets/secretariadoJuridico.jpg")}
                resizeMode='contain'
            />
            <View style={styles.containerDetail}>
                <View style={styles.containerText}>
                    <Text style={[styles.title, width > 359 ? styles.titleMin : styles.titleMax]}>
                        {product.title}
                    </Text>
                    <Text style={styles.price}>
                        ${product.price}
                    </Text>
                </View>
                <ButtonPrimary onPress={() => navigation.navigate('Detail', { id: product.id })} style={styles.button}><Text style={{fontSize:20}}>Ver Detalles</Text>
                </ButtonPrimary>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: colors.secondary,
    },
    image: {
        height: 415,
        maxWidth: 415,
        minHeight: 100,
    },
    containerDetail: {
        width: "100%",
        height: 340,
        borderTopRightRadius: 80,
        borderTopLeftRadius: 80
    },
    containerText: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: colors.tertiary,
        fontFamily: "letter",
        marginTop: 30
    },
    titleMax: {
        fontSize: 50
    },
    titleMin: {
        fontSize: 35
    },
    price: {
        fontSize: 35,
        width: "100%",
        textAlign: "center",
        color: colors.tertiary,
        fontWeight: "bold"
    },
    button: {
        marginTop: 20,
        width:"80%",
        marginHorizontal:"10%"
    }
})