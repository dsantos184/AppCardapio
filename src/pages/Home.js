import React, {Component} from 'react';

import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
    HomeList:
    {
        screen: HomeList
    },

    HomeProducts:
    {
        screen: HomeProducts
    },

})

export default Navegador;