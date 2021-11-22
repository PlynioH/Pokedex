import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Background from '../components/background'
import Button from '../components/button'
import Header from '../components/header'
import Constants from '../shared/constants'
import Pokemon from '../controllers/putpokemon'

export default class UpdatePokemon extends React.Component{
    constructor(props){
        super(props)
        const { pokemon } = this.props.route.params;
        this.state = {
            id: pokemon._id,
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            hp: pokemon.hp.toString(),
            foto: pokemon.foto
        }
    }

    render(){
        const { navigation } = this.props
        return(
            <View style={{display: "flex"}}>
                <Background />
                <Header screen={'Atualizar Pokémon'} />
                <View style={styles.container}>
                    <TextInput
                    style={styles.input}
                    placeholder='ID'
                    value={this.state.id}
                    onChangeText={(text)=>{
                        this.setState({id: text})
                    }}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    value={this.state.nome}
                    onChangeText={(text)=>{
                        this.setState({nome: text})
                    }} 
                    />
                    <TextInput
                    style={styles.input}
                    placeholder='Tipo'
                    value={this.state.tipo}
                    onChangeText={(text)=>{
                        this.setState(
                         {tipo: text}
                        )
                    }}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder='HP'
                    value={this.state.hp}
                    onChangeText={(text)=>{
                        this.setState(
                            {hp: text}
                        )
                    }}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder='Link da foto'
                    value={this.state.foto}
                    onChangeText={(text)=>{
                        this.setState({
                            foto: text
                        })
                    }}
                    />
                    <Button onclick={() => {
                        Pokemon.putPokemon({
                            "nome": this.state.nome.toLowerCase(),
                            "tipo": this.state.tipo.toLowerCase(),
                            "_id": this.state.id,
                            "hp": this.state.hp,
                            "foto": this.state.foto
                        }).then(response => {
                            if(response == 200){
                                clearImmediate()
                                navigation.goBack()
                            }else{
                                console.log('erro')
                            }
                        })
                    }} screen={'Atualizar'} primary={Constants.water} secundary={Constants.water2} />
                </View>
            </View>
        )}
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