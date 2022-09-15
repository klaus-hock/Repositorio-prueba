import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../Constants/Colors';

const styles = StyleSheet.create({
   Input: {
    height: 50,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 20,
    fontFamily: 'Lato-Regular',
   }
})

const Input = ({style, ...props}) => {
  return (
    <TextInput {...props} style={{...styles.Input, ...style}}/>
  )
}

export default Input;