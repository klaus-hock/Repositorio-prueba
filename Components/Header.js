import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../Constants/Colors'

const styles = StyleSheet.create({
   header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingTop: 25,
   },

   text: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'Lato-Bold',
   }
})

const Header = ({title}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header;