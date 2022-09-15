import React from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../Components/Card'
import Input from '../Components/Input'
import { colors } from '../Constants/Colors'
import { useState } from 'react'
import Numbercontainer from '../Components/Numbercontainer'


const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
   },

   texto: {
    fontSize: 20,
    color: colors.text,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
    fontFamily: 'Lato-Bold',
   },

   titulo: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontFamily: 'Lato-Regular',
   },

   inputContainer: {
    width: 300,
    maxWidth: '80%',
    height: 200,
    justifyContent: 'center',
    marginHorizontal: 20,
    alignItems: 'center',
  
   },

   input: {
    width: '100%',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    maxWidth: 70,
    fontSize: 25,
    paddingVertical: 10,
    marginBottom: 15,
    textAlign: 'center',
    marginEnd: 10,
    fontFamily: 'Lato-Regular',
   },

   buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '70%',
    marginStart: 10,
   },

   resumenContainer: {
     marginTop: 20,
     alignItems: 'center',
     width: '73%',
     height: 180,
     justifyContent: 'center',
   },

   resumenTexto: {
     paddingBottom: 5,
     fontSize: 18,
     fontFamily: 'Lato-Regular',
   },
})

const Startgame = ({onStartGame}) => {
  const [numero, setNumero] = useState('');
  const [confirmed, setConfirmed] = useState(false);    //Una cose es el numero que yo seleccione  y otra cosa es el valor del input
  const [selectedNumber, setSelectedNumber] = useState(0);

  const onHandleChangeText = (text) => {
    setNumero(text.replace(/[^0-9]/g, ''));
  }

  const onRest = () => {
    setNumero('');
    setSelectedNumber(0);
    setConfirmed(false);
    Keyboard.dismiss();
  }

  const Confirmar = () => {

    const ElejirNumero = parseInt(numero, 10);
    if(isNaN(ElejirNumero) || ElejirNumero <= 0 || ElejirNumero > 99) return;
    setConfirmed(true);                                                           //aqui va true ya que segun la validacion que si no es 0 o negativo entonces confirmamos con true
    setSelectedNumber(ElejirNumero);
    setNumero('');
  }

  const onHandleStartGame = () => {
    onStartGame(selectedNumber);
  }

 
  

  const comfirmedOutput = () => confirmed && (   //aqui estoy confirmando y voy a mostrar un componente en pantalla, en este caso el Card que tiene sombra con estylos
    <Card style={styles.resumenContainer}>
      <Text style={styles.resumenTexto}>Tu seleccion</Text>
      <Numbercontainer>{selectedNumber}</Numbercontainer>
      <Button
      title='Empezar Juego'
      onPress={onHandleStartGame}
      color={colors.primary}
      />
    </Card>
  )
     
  

  
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.titulo}>Elija un Numero</Text>
          <Input style={styles.input}
            keyboardType='numeric'
            maxLength={2}
            blurOnSubmit
            autoCorrect={false}
            onChangeText={(text) => onHandleChangeText(text)}
            value={numero}
          />
        
          <View style={styles.buttonContainer}>
            <Button 
            title='Limpiar'
            onPress={onRest}
            color={colors.primary}
            />
            <Button title='Confirmar'
            onPress={Confirmar}
            color={colors.secondary}
            />
          </View>
        </Card>
        {comfirmedOutput()}
      </View>
  )
}

export default Startgame;