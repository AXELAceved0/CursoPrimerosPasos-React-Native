import {  StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:colors.primary,
  },
  container: {
    backgroundColor: colors.primary,
    // height:50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  text: {
    color: colors.lleters,
    width: "100%",
    textAlign: "center",
    fontSize: 30
  },
  icon: {
    color: colors.lleters,
  }
})