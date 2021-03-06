import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useState} from 'react';

export default function Quadrado(props)
{

    const jogador = props.jogador
    const vencedor = props.vencedor
    const [fezJogada, setJogada]= useState(0)
    const reset = props.reset

   let icone = <Text></Text>;
   if (fezJogada == 0 || reset == 0)
   {
        icone = <Text></Text>
    
   } else if (fezJogada == 1)
   {
        icone = <Entypo name="cross" size={32} color="black"/>
   } else if (fezJogada == 2)
   {
       icone = <Entypo name="circle" size={32} color="black"/>
   }

   function jogada ()
   {
       if(fezJogada == 0 && (vencedor == undefined  || vencedor == 0))
       {
         setJogada(jogador)
         const posicao = props.posicao
         props.tabuleiro(posicao)
         let novo = (jogador ==1) ? 2 : 1;
         props.alteraJogador(novo);
       } else {
           setJogada(0);
           console.log("acabou")
       }
   }

    return(
        <TouchableWithoutFeedback onPress={jogada}>
            <View style={css.box}>
              {icone}
            </View>
        </TouchableWithoutFeedback>
    );
}

const css = StyleSheet.create({

    box:{
        borderColor: '#000000',
        borderStyle: "solid",
        borderWidth: 1,
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})