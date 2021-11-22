import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Constants from '../shared/constants'
import Svg, { Path } from "react-native-svg"

export function SideMenu(props) {
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Svg width="50%" height="225" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d={Constants.pokeball} fill={Constants.b2} />
                </Svg>
            </View>
            <DrawerContentScrollView>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Svg width={size} height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <Path d={Constants.plus} fill={color} /> 
                            </Svg>
                        )}
                        label="Adicionar Pokémon"
                        onPress={() => {props.navigation.navigate('add')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Svg width={size} height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <Path d={Constants.filter} fill={color} /> 
                            </Svg>
                        )}
                        label="Filtrar por Tipo"
                        onPress={() => {props.navigation.navigate('filters')}}
                    />
            </DrawerContentScrollView>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.b1
    },
    header: {
        width: '100%',
        height: '25%',
        backgroundColor: Constants.fire,
        justifyContent: 'center',
        alignItems: 'center',
    }
})