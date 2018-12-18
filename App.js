/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React, { Component}  from 'react';
import { Image } from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import Horarios from './src/pages/Horarios';
import Sobre from './src/pages/Sobre';

import Geral from './assets/tools/Geral';
import StylesPages from './src/pages/StylesPages';

const Navegador = createBottomTabNavigator({
  Home:
  {
    screen: Home,
    navigationOptions: ({
      tabBarLabel:'Home',
      tabBarIcon: ({focused, tintColor}) =>{          
        const {icons} = Geral.imagem;

        if( focused )
        {
          return(
            <Image
              source={icons.homeOnFocus}
              style={StylesPages.icon}
            />
          )
        }
        else
        {
          return(
            <Image
              source={icons.homeLostFocus}
              style={StylesPages.icon}
            />
          )
        }
      }
    })
  },

  Contato:
  {
    screen: Contato
  },

  Horarios:
  {
    screen: Horarios
  },

  Sobre:
  {
    screen: Sobre
  }

})

const AppContainer = createAppContainer(Navegador);

export default AppContainer;