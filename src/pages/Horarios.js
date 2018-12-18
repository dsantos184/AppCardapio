import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
} from 'react-native';

import Geral from '../../assets/tools/Geral';
import StylesPages from './StylesPages';

export default class Horarios extends Component
{
    static navigationOptions = ({
        tabBarLabel:'Horários',
        tabBarIcon: ({focused, tintColor}) =>{
            const {icons} = Geral.imagem;
            
            if( focused )
            {
                return(
                    <Image
                        source={icons.horariosOnFocus}
                        style={StylesPages.icon}
                    />
                )
            }
            else
            {
                return(
                    <Image
                        source={Geral.imagem.icons.horariosLostFocus}
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
                <Text>Horarios</Text>
            </View>
        )
    }
}