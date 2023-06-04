import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Botao from './Botao';
import Hacker from './hacker_de_novo.jpg';
export default class App extends Component {
  

  constructor(props){
    super(props);
    this.state = {
      display:"",
      operador:"",
      numeroEmEspera:0
    }
  }

  limparDisplay(){
    this.setState((state, props) => ({ display:""}));
  }

  acrescentarNumero(n){
    this.setState((state, props) => ({ display: state.display + n }));
  }

  pontoDecimal(){
    if(this.state.display.indexOf(".") == -1){
      this.setState((state, props) => ({ display: state.display + "." }));
    }
  }

  setOperador(op){
    this.setState((state, props) => ({ operador: op }));
    this.setState((state, props) => ({ numeroEmEspera: parseFloat(state.display) }));
    this.limparDisplay();
  }

  resultado(){
    let resultado = 0;
    let operador = this.state.operador;
    let numeroEmEspera = this.state.numeroEmEspera;
    let display = this.state.display;

    if(operador == "+"){
      resultado = numeroEmEspera + parseFloat(display);
    }
    if(operador == "-"){
      resultado = numeroEmEspera - parseFloat(display);
    }
    if(operador == "*"){
      resultado = numeroEmEspera * parseFloat(display);
    }
    if(operador == "/"){
      resultado = numeroEmEspera / parseFloat(display);
    }

    //se for decimal vai arredondar pra nao poluir a tela
    if(resultado % 1 != 0){
      resultado = resultado.toFixed(3);
    }
    

    this.setState((state, props) => ({ display: resultado.toString() }));
    this.setState((state, props) => ({ operador: "" }));
    this.setState((state, props) => ({ numeroEmEspera: 0 }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Hacker} style={{width: 100, height: 100}} /> 
        <View >
          <Text style={styles.titulo}> Calculadora </Text>
        </View>
        <View style={styles.display}>
          <Text style={styles.displayTexto}>{this.state.display}</Text>
        </View>
        <View style={styles.teclasNumerosLinha}>
          <Botao displayKey={"C"} onClick={() => this.limparDisplay()} />
        </View>        
        <View style={styles.teclasNumerosLinha}>
          <Botao displayKey={"7"} onClick={() => this.acrescentarNumero(7)} />
          <Botao displayKey={"8"} onClick={() => this.acrescentarNumero(8)} />
          <Botao displayKey={"9"} onClick={() => this.acrescentarNumero(9)} />
          <Botao displayKey={"/"} onClick={() => this.setOperador("/")} />
        </View>
        <View style={styles.teclasNumerosLinha}>
          <Botao displayKey={"4"} onClick={() => this.acrescentarNumero(4)} />
          <Botao displayKey={"5"} onClick={() => this.acrescentarNumero(5)} />
          <Botao displayKey={"6"} onClick={() => this.acrescentarNumero(6)} />
          <Botao displayKey={"*"} onClick={() => this.setOperador("*")} />
        </View>
        <View style={styles.teclasNumerosLinha}>
          <Botao displayKey={"1"} onClick={() => this.acrescentarNumero(1)} />
          <Botao displayKey={"2"} onClick={() => this.acrescentarNumero(2)} />
          <Botao displayKey={"3"} onClick={() => this.acrescentarNumero(3)} />
          <Botao displayKey={"-"} onClick={() => this.setOperador("-")} />
        </View>
        <View style={styles.teclasNumerosLinha}>
          <Botao displayKey={"0"} onClick={() => this.acrescentarNumero(0)} />
          <Botao displayKey={"."} onClick={() => this.pontoDecimal()} />
          <Botao displayKey={"="} onClick={() => this.resultado()} />
          <Botao displayKey={"+"} onClick={() => this.setOperador("+")} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {    
    color:"red",
    textAlign:"center",
    fontSize:36,
  },

  display:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"gray",
    borderColor:"white",
    borderWidth:2,
    width:300,
    height:50,
    textAlign:"right",
  },

  displayTexto:{
    color:"white",
    textAlign:"right",
    fontSize:24,
  },

  teclasNumerosLinha:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignContent:"center",
    margin:10,
    width:"70%",
    height:50,
  },

});

