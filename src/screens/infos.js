import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Constants from '../shared/constants'
import Button from '../components/button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import Pokemon from '../controllers/deletepokemon'

export default function Infos({ route, navigation }){
    const pokemon = route.params?.pokemon
    const colors = Constants.GetColor(pokemon.tipo)
    const styles  = StyleSheet.create({
        infos:{
            marginLeft: 20,
            marginTop: 40
        },
        container:{
            flex: 7
        },
        centro:{
            alignItems: 'center',
        },
        text:{
            fontSize: 25,
        },
        title2:{
            fontWeight: 'bold',
            fontSize: 25,
        },
        container4:{
            width:"100%",
            alignItems: 'flex-start',
            flexDirection: "row",
        },
        title:{
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: -30
        },
        container2:{
            flex:2,
            backgroundColor: colors.primary,
            alignItems: 'center',
        },
        container3:{
            flex: 5,
            marginTop: -30,
            backgroundColor: Constants.b2,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        image:{
            marginTop: -140,
            aspectRatio: 1,
            width: "60%",
        },
        pokebola:{
            marginTop: 30
        },
        button:{
            alignItems: 'center',
            marginTop: "30%"
        },
        header:{
            position:'absolute',
            left:0,
            width:'100%',
            elevation:1,
            height:95,
            display:'flex',
            flexDirection:'row',
            paddingHorizontal:15,
            alignItems:'center',
        }
    })
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.header}>
                    <View>
                        <TouchableOpacity onPress={()=> navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Svg style={styles.pokebola} width="55%" height="225" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d={Constants.pokeball} fill={colors.secundary} />
                </Svg>
            </View>
            <View style={styles.container3}>
                <View style={styles.centro}>
                    <Image style={styles.image} source={{uri:pokemon.foto}} />
                    <Text style={styles.title}>{pokemon.nome[0].toUpperCase() + pokemon.nome.substr(1)}</Text>
                </View>
                <View style={styles.infos}>
                    <View style={styles.container4}>
                        <Text style={styles.title2}>ID: </Text>
                        <Text style={styles.text}>#{pokemon._id}</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.title2}>HP: </Text>
                        <Text style={styles.text}>{pokemon.hp}</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.title2}>Tipo: </Text>
                        <Text style={styles.text}>{pokemon.tipo[0].toUpperCase() + pokemon.tipo.substr(1)}</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Button screen={'Editar'} onclick={()=>navigation.navigate('updatepokemon', { pokemon: pokemon })} primary={Constants.water} secundary={Constants.water2}/>
                    <Button screen={'Deletar'} onclick={()=>{
                        Pokemon.deltePokemon(pokemon._id).then(response => {
                            if(response == 200){
                                navigation.goBack()
                            }else{
                                console.log('erro')
                            }
                        })
                    }} primary={Constants.fire} secundary={Constants.fire2}/>
                </View>
            </View>
        </View>
    )
}