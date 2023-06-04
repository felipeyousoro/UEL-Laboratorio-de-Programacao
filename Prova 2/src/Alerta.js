import { StyleSheet, Alert } from 'react-native'

export function alertaVerdadeiro () {
    Alert.alert(
     'Parabéns!',
     'Você acertou o Pokémon!!',
     [
       {
         text: 'Continuar',
         style: 'destructive'
       },
     ]
   )
}

export function alertaFalso () {
    Alert.alert(
     'Mais sorte na próxima vez!',
     'Não desista!!',
     [
       {
         text: 'Continuar',
         style: 'destructive'
       },
     ]
   )
}
 
styles = StyleSheet.create({
 container: {
   justifyContent: 'center',
   flex: 1
 },
 button: {
   height: 70,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#ededed'
 }
})

