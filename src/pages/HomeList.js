import React, { Component } from 'react';

import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';

import ListaTipos from '../components/ListaTipos';
import StylesPages from './StylesPages';

export default class HomeList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            list:
            [
                {
                    key:'1',
                    title: 'Prato Executivo',
                    img: require('../../assets/img/tipos/pe.png'),
                    description: 'O melhor prato executivo do bairro',
                    bg: '#e35339',
                    products:
                    [
                        {
                            key: '1',
                            name: 'Prato de Frango', 
                            img: require('../../assets/img/cardapio/pe/executivos_frang_.png')
                        },
                        {
                            key: '2',
                            name: 'Peixe Assado na Brasa', 
                            img: require('../../assets/img/cardapio/pe/executivos_peix_.png')   
                        },
                        {
                            key: '3',
                            name: 'Picanha na Pedra', 
                            img: require('../../assets/img/cardapio/pe/executivos_picanh_.png')   
                        },
                    ]
                },

                {
                    key:'2',
                    title: 'Saladas',
                    img: require('../../assets/img/tipos/saladas.png'),
                    description: 'Saladas Saudáveis',
                    bg: '#a6bb24',
                    products:
                    [
                        {
                            key: '1',
                            name: 'Salada Agridoce', 
                            img: require('../../assets/img/cardapio/saladas/salada_aguadoc_.png')
                        },
                        {
                            key: '2',
                            name: 'Salada de Salmão', 
                            img: require('../../assets/img/cardapio/saladas/salada_salma.png')
                        },
                        {
                            key: '3',
                            name: 'Salada de Frango', 
                            img: require('../../assets/img/cardapio/saladas/salada-fr.png')
                        },
                    ]
                },

                {
                    key:'3',
                    title: 'Bebidas',
                    img: require('../../assets/img/tipos/bebidas.png'),
                    description: 'Bebidas Bem Gelada',
                    bg: '#079ed4',
                    products:
                    [
                        {
                            key: '1',
                            name: 'CaipRosca', 
                            img: require('../../assets/img/cardapio/bebidas/capirosc_3.png')
                        },
                        {
                            key: '2',
                            name: 'Cookies Crean', 
                            img: require('../../assets/img/cardapio/bebidas/cookies_crea.png')
                        },
                        {
                            key: '3',
                            name: 'Coquetel de Morango', 
                            img: require('../../assets/img/cardapio/bebidas/morango_gd.png')
                        },
                        {
                            key: '4',
                            name: 'Tequila Prata', 
                            img: require('../../assets/img/cardapio/bebidas/patra.png')
                        },
                        {
                            key: '5',
                            name: 'Suco Fitness', 
                            img: require('../../assets/img/cardapio/bebidas/suco_fitines_gd.png')
                        },
                    ]
                },

                {
                    key:'4',
                    title: 'Sobremesas',
                    img: require('../../assets/img/tipos/sobremesa.png'),
                    description: 'Sobremesas Deliciosas',
                    bg: '#fcb81c',
                    products:
                    [
                        {
                            key: '1',
                            name: 'Brownnie', 
                            img: require('../../assets/img/cardapio/sobremesas/brownie_gd.png')
                        },
                        {
                            key: '2',
                            name: 'Creme Papaya Cassis', 
                            img: require('../../assets/img/cardapio/sobremesas/creme_papaya_cassis_gd.png')
                        },
                        {
                            key: '3',
                            name: 'Delícia Gelada', 
                            img: require('../../assets/img/cardapio/sobremesas/delicia_gelada_gd.png')
                        },
                    ]
                }
            ]
        };
    }
    
    static navigationOptions = ({
        title: 'Restaurante ZXy'
    })

    render()
    {
        return(
            <View style={StylesPages.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ListaTipos data={item} navigation={this.props.navigation} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    }
})