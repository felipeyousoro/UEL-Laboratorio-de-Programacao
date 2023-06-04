import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AdivinhadorPokemon from './AdivinhadorPokemon'
import ExibirResultados from './ExibirResultados';
import 'react-native-gesture-handler';

const Tab = createMaterialBottomTabNavigator()
 
export default class App extends Component{
  state = {
    resultados: []
  }
 
  addResultado = (resultado) => {
    const resultados = this.state.resultados
    resultados.push(resultado)
    this.setState({ resultados })
    console.log(this.state.resultados)
  }
  
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Quem é esse Pokémon?'>
           {props => <AdivinhadorPokemon {...props}
           addResultado={this.addResultado}/>}
          </Tab.Screen>
          <Tab.Screen name='Histórico de Resultados'>
            {props => <ExibirResultados {...props}
            resultados={this.state.resultados}/>}
          </Tab.Screen>
        </Tab.Navigator>
     </NavigationContainer> 
   )
 }
}


 