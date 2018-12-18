import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
} from 'react-native';

import Geral from '../../assets/tools/Geral';
import StylesPages from './StylesPages';

export default class Contato extends Component
{
    static navigationOptions = ({
        tabBarLabel:'Contato',
        tabBarIcon: ({focused, tintColor}) =>{
            
            const {icons} = Geral.imagem;

            if( focused )
            {
                return(
                    <Image
                        source={icons.contatoOnFocus}
                        style={StylesPages.icon}
                    />
                )
            }
            else
            {
                return(
                    <Image
                        source={icons.contatoLostFocus}
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
                <Text>Contato</Text>
            </View>
        )
    }
}