import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../global/colors';

const TabBarIcons = ({text,icon,color,textStyle }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={icon} size={20} color={color} />
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    )
}

export default TabBarIcons

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        width:"100%",
        fontFamily:"letter",
        color:colors.primary,
        fontSize:12
    }
})