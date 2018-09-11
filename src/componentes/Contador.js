import React, {Component} from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import Padrao from '../estilo/Padrao'



export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () => this.setState({ numero: this.state.numero + 1 })

    limpar = () => this.setState({ numero: this.props.numeroInicial })

    render() {
        return (
            <View style={Padrao.ex}>
                <Text style={{fontSize: 30}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text style={{fontSize: 20}}>Incrementar / Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}