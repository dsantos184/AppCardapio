import React, { Component } from 'react';

import{
    View,
    Text,
    Image
} from 'react-native';

import Geral from '../../assets/tools/Geral';
import StylesPages from './StylesPages';

export default class Sobre extends Component
{
    static navigationOptions = ({
        tabBarLabel:'Sobre',
        tabBarIcon: ({focused, tintColor}) =>{
            
            const {icons} = Geral.imagem;

            if( focused )
            {
                return(
                    <Image
                        source={icons.sobreOnFocus}
                        style={StylesPages.icon}
                    />
                )
            }
            else
            {
                return(
                    <Image
                        source={icons.sobreLostFocus}
                        style={StylesPages.icon}
                    />
                )
            }
        }
    })

    render()
    {
        return(
            <View>
                <Text>Sobre</Text>
            </View>
        )
    }
}