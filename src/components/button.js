import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BaseButton } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import Constants from '../shared/constants';

export default function Button({screen, primary, secundary, onclick}){
  const navigation = useNavigation();
  const styles=StyleSheet.create({
    contailer:{
        
    },
    button:{
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 15,
        height: 50,
        width: 180,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        backgroundColor: primary,
    },
    text:{
        fontSize: 19,
        color: "#fff"
    },
    pokeball:{
        margin: 10,
    }
})
   return(
    <View style={styles.contailer}>
        <BaseButton onPress={onclick} style={styles.button}>
            <Svg style={styles.pokeball} width="20%" height="225" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d={Constants.pokeball} fill={secundary} />
            </Svg>
            <Text style={styles.text}>{screen}</Text>
        </BaseButton>
    </View>
   ) 
}