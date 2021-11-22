import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Background from '../components/background'
import Header from '../components/header'
import Constants from '../shared/constants'
import Button from '../components/button'

export default class Filters extends React.Component{
    render(){
        const types = Constants.types
        const { navigation } = this.props;
        return(
            <View style={styles.init}>
                <Background />
                <Header screen={'Filtrar por Tipo'} />
                <View style={styles.container}>
                    <FlatList
                        data={types}
                        renderItem={({ item }) => {
                            var color = Constants.GetColor(item.name)
                            return <Button onclick={()=>navigation.navigate('pokemonlist', { tipo: item })} primary={color.primary} secundary={color.secundary} screen={item.name[0].toUpperCase() + item.name.substr(1)} />
                        }}
                        keyExtractor={item => item.name}
                        numColumns={2}
                    />
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    init:{
        width:"100%"
    },
    container:{
        marginTop: 95,
        paddingLeft: 5,
        paddingRight: 5,
        display:'flex',
        flexWrap: "wrap",
    }
})