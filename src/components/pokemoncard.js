import React from 'react'
import {View,Text, StyleSheet, Image} from 'react-native'
import { BaseButton } from 'react-native-gesture-handler';

export default function Pokecard({name, type, url, primary, secundary, onclick}){
  const styles=StyleSheet.create({
    container:{
        display:"flex",
    },
    card:{
        backgroundColor: primary,
        borderRadius: 10,
        padding: 10,
        margin: 7,
    },
    title:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff"
    },
    subtitle:{
        backgroundColor: secundary,
        borderRadius: 8,
        padding: 5,
        alignItems: "center",
        marginTop: 10
    },
    text:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    containerimage:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    image:{
        aspectRatio: 1,
        width: 100,
        marginLeft: 70,
        marginTop: -30,
        marginRight: -10,
        marginBottom: -10,
    }
    })
   return(
    <View style={styles.container}>
        <BaseButton onPress={onclick} style={styles.card}>
            <View style={styles.text}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.subtitle}>
                    <Text style={{color: "#fff"}}>{type}</Text>
                </View>
            </View>
            <View style={styles.containerimage}>
                <Image style={styles.image} source={{uri:url}} />
            </View>
        </BaseButton>
    </View>
   ) 
}