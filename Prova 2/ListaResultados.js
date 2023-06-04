import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native'
import MensagemVazia from './MensagemVazia'


//tab nesse arquivo ficou esquisito
export default class ListaResultados extends React.Component {
    navigate = (item) => {
        this.props.navigation.navigate('Resultado', { resultado: item })
    }
    render() {
        const { resultados } = this.props
        return (
        <ScrollView  contentContainerStyle={[!resultados.length && { flex: 1 }]}>
                <View style={[!resultados.length && { justifyContent: 'center', flex: 1 }]}>
                    {
                        !resultados.length && <MensagemVazia message='Não há nada para mostrar' />
                    }
                    {
                        resultados.map((item, index) => (
                            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                                <View style={styles.resultadosContainer}>
                                    <Text style={styles.nome}>{item.nome}</Text>
                                    <Text style={styles.acertouErrou}>{item.acertouErrou}</Text>                                 
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    resultadosContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: 'violet'
    },
    nome: {
        fontSize: 25,
    },
    acertouErrou: {
        color: 'blue'
    }, 

})
