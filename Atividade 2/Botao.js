import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Botao extends Component{
  render(){
    return(
        <View style={styles.botao}>
            <TouchableOpacity onPress={()=>{this.props.onClick()}}>
                <Text style={styles.botaoTexto}>{this.props.displayKey}</Text>
            </TouchableOpacity>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  botao:{   
    backgroundColor:"#8B0000",
    width:90,
    height:90,
    borderColor:"white",
    borderWidth:1,
    flex:.25
  },
    
  botaoTexto:{
    color:"white",
    textAlign:"center",
    fontSize:36,      
  }
    
});