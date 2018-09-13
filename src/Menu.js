import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSinconizado from './componentes/ComunicacaoIndireta'

export default createDrawerNavigator({
    TextoSincronizado: {
        screen: () => <TextoSinconizado />,
        navigationOptions: { title: 'ComunicaçãoIndireta' }
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'/>,
        navigationOptions: { title: 'ComunicaçãoDireta' }
    },
    Evento: {
        screen: () => <Evento />,
        navigationOptions: { title: 'Evento' }
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>,
        navigationOptions: { title: 'ValidarProps' }
    },
    Plataformas: {
        screen: () => <Plataformas/>,
        navigationOptions: { title: 'Plataformas' }
    },
    Contador: {
        screen: () => <Contador numeroInicial={7}/>,
        navigationOptions: { title: 'Contador' }
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Native!!!"/>,
        navigationOptions: { title: 'Inverter' }
    },
    ParImpar: {
        screen: () => <ParImpar numero={8}/>,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto="Flexível!!!"/>,
        navigationOptions: { title: 'Texto Simples' }
    }
}, { drawerWidth: 300 })