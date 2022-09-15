import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../Components/Card'
import Numbercontainer from '../Components/Numbercontainer';
import { colors } from '../Constants/Colors';
import { generateRandomNumberBetween } from '../Aleatorio/funsion';


const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
   },

   card: {
    marginTop: 10,
    width: '80%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
   },

   buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '70%',
    marginStart: 10,
   },

   titulo: {
     marginBottom: 15,
   },
});



const Game = ({selectedNumber}) => {

    const [numeroinvitado, setInvitado] = useState(generateRandomNumberBetween(1, 100, selectedNumber));

  return (
    <View style={styles.container}>
        <Card style={styles.card}>
            <Text style={styles.titulo}>La suposicion del oponente</Text>
            <Numbercontainer>{numeroinvitado}</Numbercontainer>
            <View style={styles.buttonContainer}>
                <Button 
                title='MENOR' 
                onPress={() => null}
                color={colors.primary}
                />
                <Button 
                title='MAYOR' 
                onPress={() => null}
                color={colors.secondary}
                />
            </View>
        </Card>
    </View>
  );
}

export default Game;