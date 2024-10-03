import { StatusBar, StyleSheet } from 'react-native';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Navigator from './src/navigation/Navigator';
import { store } from './src/app/store'
import { Provider } from 'react-redux'


const App = () => {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}

export default App

const styles = StyleSheet.create({});
