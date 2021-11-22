import React from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Constants from '../shared/constants'

function Background(props){
    return(
        <View style={ styles.container }>
            <Svg style={styles.pokebola} width="55%" height="225" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d={Constants.pokeball} fill={Constants.b3} />
            </Svg>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    pokebola: {
        marginTop: '-16%',
        marginRight: '-16%',
    },
})

export default Background