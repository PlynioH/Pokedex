import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SideMenu } from './components/sidemenu'

const Drawer = createDrawerNavigator();

import Home from './screens/home'
import Addpokemon from './screens/addpokemon'
import Filters from './screens/filters'
import Infos from './screens/infos'
import PokemonList from './screens/pokemonlist'
import UpdatePokemon from './screens/updatepokemon'

export default function Routes(){
    return(
        <NavigationContainer>
            <StatusBar hidden />
            <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false, drawerPosition: 'right', swipeEdgeWidth: 0}} drawerContent={props => <SideMenu {...props} />}>
                <Drawer.Screen options={{ unmountOnBlur: true }} name="Home" component={Home} />
                <Drawer.Screen options={{ unmountOnBlur: true }} name="infos" component={Infos} />
                <Drawer.Screen options={{ unmountOnBlur: true }} name="add" component={Addpokemon} />
                <Drawer.Screen name="filters" component={Filters} />
                <Drawer.Screen options={{ unmountOnBlur: true }} name="pokemonlist" component={PokemonList} />
                <Drawer.Screen options={{ unmountOnBlur: true }} name="updatepokemon" component={UpdatePokemon} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}