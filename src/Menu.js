import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'

export default createDrawerNavigator({
    Plataformas: {
        screen: () => Plataformas,
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