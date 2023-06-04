import { createStackNavigator } from '@react-navigation/stack'
import ListaResultados from './ListaResultados'
import Resultado from './Resultado'
const ExibirResultadosNav = createStackNavigator()

const ExibirResultados = ({resultados}) => (
    <ExibirResultadosNav.Navigator >
        <ExibirResultadosNav.Screen name="Resultados">
            { props => <ListaResultados {...props} resultados={resultados}/> }
        </ExibirResultadosNav.Screen>
        <ExibirResultadosNav.Screen name="Resultado" options={({ route }) => ({ title: route.params.resultado.nome })} >
            { props => <Resultado {...props}/> }
        </ExibirResultadosNav.Screen>
    </ExibirResultadosNav.Navigator>

)


  
export default ExibirResultados
 
 