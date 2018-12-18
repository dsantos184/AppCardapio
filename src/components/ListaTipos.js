import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    Image,
    View,
} from 'react-native';


export default class ListaTipos extends Component
{
    constructor(props)
    {
        super(props);
    }

    clicou = () =>(
       this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, produtos:this.props.data.products})
    )

    render()
    {
        const { data } = this.props;
        return(
            <TouchableHighlight onPress={this.clicou}>
                <View style={[styles.containerList, {backgroundColor:data.bg}]}>
                    <Image source={data.img} style={styles.imageList} />
                    <View>
                        <Text style={styles.listTitle}>{data.title}</Text>
                        <Text style={styles.listDescription}>{data.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    containerList:
    {
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageList:
    {
        width: 64,
        height: 64,
        marginLeft: 20,
        marginRight: 20,
    },

    listTitle:
    {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },

    listDescription:
    {
        color: '#fff',
        fontSize: 16,
    }
})