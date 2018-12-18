import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import ListaProdutos from '../components/ListaProdutos';

export default class HomeProducts extends Component
{
    constructor(props)
    {
        super(props)

        this.state ={
            list: props.navigation.state.params.produtos
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    })
    render()
    {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item})=><ListaProdutos data={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ccc',
    }
})