import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 7.9 },
    { id: 3, nome: 'Bia', nota: 7.9 },
    { id: 4, nome: 'Claudia', nota: 7.9 },
    { id: 5, nome: 'Roberto', nota: 7.9 },
    { id: 6, nome: 'Rafael', nota: 7.9 },
    { id: 7, nome: 'Guilherme', nota: 7.9 },
    { id: 8, nome: 'Rebeca', nota: 7.9 },
    { id: 9, nome: 'Tobias', nota: 7.9 },
    { id: 10, nome: 'João', nota: 7.9 },
    { id: 11, nome: 'Ana', nota: 7.9 },
    { id: 12, nome: 'Bia', nota: 7.9 },
    { id: 13, nome: 'Claudia', nota: 7.9 },
    { id: 14, nome: 'Roberto', nota: 7.9 },
    { id: 15, nome: 'Rafael', nota: 7.9 },
    { id: 16, nome: 'Guilherme', nota: 7.9 },
    { id: 17, nome: 'Rebeca', nota: 7.9 },
    { id: 18, nome: 'Tobias', nota: 7.9 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItems} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}