import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Header({screen}){
  const navigation = useNavigation();
   return(
    <View style={headerStyles.container}>
        <View>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={headerStyles.title}>
            <Text>{screen}</Text>
        </View>
    </View>
   ) 
}

const headerStyles=StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        width:'100%',
        elevation:4,
        height:95,
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:'center',
    },
    title:{
        marginLeft: "3%"
    }
})