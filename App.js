import { StatusBar, StyleSheet } from 'react-native';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Navigator from './src/navigation/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Navigator />
    </>
  );
}

export default App

const styles = StyleSheet.create({});
