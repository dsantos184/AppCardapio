import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import StylesPages from '../pages/StylesPages';

export default class ListaProdutos extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {}
    }

    render()
    {
        return(
            <View style={styles.containerProdutos}>
                <Image 
                    source={this.props.data.img} 
                    style={styles.imageProduto}
                    resizeMode='contain'
                />
                <Text style={styles.nomeProduto}>{this.props.data.name}</Text>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerProdutos:
    {
        height: 100,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageProduto:
    {
        width: 140,
        height: 70,
    },

    nomeProduto:
    {
        fontSize: 16,
        fontWeight: 'bold',
    }
})