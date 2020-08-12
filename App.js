import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Routes from './src/routes';

export default function App() {
  const [loadedFont, setLoadedFont] = useState(false)

  async function loadFont(){
    await Font.loadAsync({
      'Cairo': require('./assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Semibold': require('./assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf')
    })
  }
  if(loadedFont){
    return(
      <>
        <Routes />
      </>
    )
  }
  return (
    <AppLoading startAsync={loadFont} onFinish={() => setLoadedFont(true)}/>
  )
}
