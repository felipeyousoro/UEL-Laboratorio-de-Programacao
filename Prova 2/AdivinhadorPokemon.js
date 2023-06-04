import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { alertaVerdadeiro, alertaFalso} from './Alerta';
import { getImagem, pokeData } from './Pokemon';

class AdivinhadorPokemon extends React.Component {
  state = {
    nomeInput:'',
    indexPokemonParaAdivinhar:pokeData.length - 1 //ultimo por padrao
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  submit = () => {
    const resultado = {
      id: this.state.indexPokemonParaAdivinhar,
      nome: pokeData[this.state.indexPokemonParaAdivinhar][0],
      acertouErrou:''
    }

    const nomeInputLower = this.state.nomeInput.toLowerCase()
    const nomeInputPrepared = nomeInputLower.replace(/\s/g, '')
    const pokeNomeOriginal = pokeData[this.state.indexPokemonParaAdivinhar][0].toLocaleLowerCase()
    if(nomeInputPrepared === pokeNomeOriginal){
      resultado.acertouErrou = 'Acertou'
      alertaVerdadeiro()
    }
    else{
      resultado.acertouErrou = 'Errou'
      alertaFalso()
    }
    
    this.props.addResultado(resultado)
    
    this.setState({
      nomeInput: '',
      indexPokemonParaAdivinhar: Math.floor(Math.random() * (pokeData.length - 1)), 
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Quem é esse Pokémon?</Text>
    
        <Image source={getImagem(pokeData[this.state.indexPokemonParaAdivinhar][0])} style={styles.pokestilo} />

        <TextInput
          placeholder='Insira o nome do Pokémon'
          onChangeText={val => this.onChangeText('nomeInput', val)}
          style={styles.input}
          value={this.state.nomeInput}
        />
        
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Eu escolho você!</Text>
          </View>
        </TouchableOpacity>

      </View>
  )
 }
}
 
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#ee1515',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  },
  pokestilo: {
    width: 300,
    height: 300,
  }

})
 
export default AdivinhadorPokemon

