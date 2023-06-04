import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { getImagem, pokeData } from './Pokemon'

class Resultado extends React.Component {
    render() {
        const { resultado } = this.props.route.params
        return (
            <View style={styles.container}>
                <Image source={getImagem(pokeData[resultado.id][0])} style={styles.pokestilo} />
                <Text style={styles.texto}>Nome do Pokémon: {resultado.nome}</Text>
                <Text style={styles.texto}>Você {resultado.acertouErrou.toLowerCase()} o Pokémon!</Text>
                <Text style={styles.texto}>Tipo do Pokémon: {pokeData[resultado.id][2]}</Text>
                <Text style={styles.texto}>Peso do Pokémon: {pokeData[resultado.id][3]}</Text>
                <Text style={styles.texto}>Altura do Pokémon: {pokeData[resultado.id][4]}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    texto: {
        fontSize: 20,
        color: 'red'

    },
    pokestilo: {
      width: 300,
      height: 300,
    }
  
  })

export default Resultado