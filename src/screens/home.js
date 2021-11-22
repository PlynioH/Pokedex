import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Background from '../components/background'
import { Entypo } from '@expo/vector-icons'
import Constants from '../shared/constants'
import Pokecard from '../components/pokemoncard'
import Pokemon from '../controllers/getpokemon'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {pokemon: []}
    }
    componentDidMount(){
        Pokemon.getAll().then(response => {
            this.setState({pokemon: response})
        })
    }
    render(){
        const { navigation } = this.props;
        return(
            <View style={ styles.container1 }>
                <View>
                    <Background />
                </View>
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
                <View style={styles.container}>
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder='Buscar pokémon'
                        onChangeText={(text)=>{
                            Pokemon.searchPokemon(text).then(response => {
                                this.setState({pokemon: response})
                            })
                        }}
                        />
                    </View>
                    <View style={styles.hamburger}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Entypo name="menu" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: Constants.b2,
    },
    container2: {
        elevation: 1,
        marginTop: 75,
        marginLeft: 10,
        alignItems: 'flex-start',
    },
    container:{
        position:'absolute',
        left:0,
        width:'100%',
        elevation:1,
        height:'12.6%',
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:'2%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    hamburger:{
        flex: 1,
        paddingRight: "7%",
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    input: {
        height: 40,
        width: 293,
        margin: 12,
        borderRadius: 10,
        backgroundColor: Constants.b2,
        borderWidth: 1,
        borderColor: Constants.dark,
        padding: 10,
    },
})