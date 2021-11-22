import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Background from '../components/background'
import Button from '../components/button'
import Header from '../components/header'
import Pokemon from '../controllers/postpokemon'
import Constants from '../shared/constants'

export default function Addpokemon({ navigation }){
    const [id, onChangeid] = React.useState('')
    const [nome, onChangenome] = React.useState('')
    const [tipo, onChangetipo] = React.useState('')
    const [hp, onChangehp] = React.useState('')
    const [foto, onChangefoto] = React.useState('')
    return(
        <View style={{display: "flex"}}>
            <Background />
            <Header screen={'Adicionar Pokémon'} />
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder='ID'
                value={id}
                onChangeText={onChangeid}
                keyboardType='numeric'
                />
                <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={onChangenome} 
                />
                <TextInput
                style={styles.input}
                placeholder='Tipo'
                value={tipo}
                onChangeText={onChangetipo}
                />
                <TextInput
                style={styles.input}
                placeholder='HP'
                value={hp}
                onChangeText={onChangehp}
                keyboardType='numeric'
                />
                <TextInput
                style={styles.input}
                placeholder='Link da foto'
                value={foto}
                onChangeText={onChangefoto}
                />
                <Button onclick={() => {
                    Pokemon.postPokemon({
                        "nome": nome.toLowerCase(),
                        "tipo": tipo.toLowerCase(),
                        "_id": id,
                        "hp": hp,
                        "foto": foto
                    }).then(response => {
                        if(response == 200){
                            navigation.navigate('infos', { pokemon: {"nome": nome.toLowerCase(),"tipo": tipo.toLowerCase(),"_id": id,"hp": hp,"foto": foto}})
                        }else{
                            console.log('erro')
                        }
                    })
                }} screen={'Cadastrar'} primary={Constants.glass} secundary={Constants.glass2} />
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    container:{
        width: "100%",
        display: "flex",
        marginTop: "30%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: "90%",
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: Constants.b2,
        borderWidth: 1,
        borderColor: Constants.dark,
        padding: 10,
    },
})