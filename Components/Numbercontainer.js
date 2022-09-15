import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../Constants/Colors';


const styles = StyleSheet.create({
   container: {
     borderWidth: 2,
     borderColor: colors.primary,
     padding: 10,
     borderRadius: 10,
     marginBottom: 10,
     alignItems: 'center',
     justifyContent: 'center',
   },

   number: {
      fontSize: 25,
      fontFamily: 'Lato-Bold',
   },
});

const Numbercontainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default Numbercontainer;