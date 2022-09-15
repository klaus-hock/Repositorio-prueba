
import { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import Header from './Components/Header';
import Game from './Screens/Game';
import Startgame from './Screens/Startgame';
import { colors } from './Constants/Colors';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

export default function App() {

  const [userNumber, setUserNumber] = useState(0);
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/Fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/Fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/Fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/Fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/Fonts/Lato-Black.ttf'),
  });

  const title = !userNumber ? 'Adivina un Numero' : 'Comienza el Juego';
  
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  if(!loaded){
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' color={colors.primary}/>
      </View>
    );
  }

  let content = <Startgame onStartGame={onStartGame}/>

  if(userNumber){
    content = <Game selectedNumber={userNumber}/>
  }


  return (
    <View style={styles.container}>
      <Header title={title} />
       {content}
    </View>
  );
}

