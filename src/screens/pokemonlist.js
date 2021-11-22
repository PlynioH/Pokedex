import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Background from '../components/background'
import Header from '../components/header'
import Pokecard from '../components/pokemoncard'
import Pokemon from '../controllers/getpokemon'
import Constants from '../shared/constants'

export default class PokemonListe extends React.Component{
    constructor(props){
        super(props)
        this.state = {pokemon: []}
    }

    render(){
        const { tipo } = this.props.route.params;
        const { navigation } = this.props
        Pokemon.getType(tipo.name).then(response => {
            this.setState({pokemon: response})
        })
        return(
            <View>
                <Background />
                <Header screen={tipo.name[0].toUpperCase() + tipo.name.substr(1)} />
                <View style={ styles.container2 }>
                    <FlatList
                        data={this.state.pokemon}
                        renderItem={({ item }) => {
                            const colors = Constants.GetColor(item.tipo)
                            return <Pokecard onclick={() => navigation.navigate('infos', { pokemon: item })} name={item.nome[0].toUpperCase() + item.nome.substr(1)} type={item.tipo[0].toUpperCase() + item.tipo.substr(1)} url={item.foto} primary={colors.primary} secundary={colors.secundary} />
                        }}
                        keyExtractor={item => item._id}
                        numColumns={2}
                    />
                </View>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container2: {
        elevation: 1,
        marginTop: 75,
        marginLeft: 10,
        alignItems: 'flex-start',
    },
})