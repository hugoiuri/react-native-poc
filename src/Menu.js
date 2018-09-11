import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena} from './componentes/Multi'

export default createDrawerNavigator({
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