import {View, Text, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useState} from 'react';

export default function Quadrado()
{

    const [jogador, setJogador] = useState(0)

   let icone = "";
   if (jogador == 1)
   {
        icone = <Entypo name="cross" size={24} color="black" />
   }

   if (jogador == 2)
   {
       icone = <Entypo name="circle" size={24} color="black" />
   }

    return(

        <View style={css.box}>

           { icone }
            
            </View>
    );
}

const css = StyleSheet.create({

    box: 
    
    {

        borderColor: '#000000',
        borderStyle: "solid",
        borderWidth: 1,
        width: 80,
        heigth: 80,
        display: 'flex',
        alignItems: 'flex',
        justifyContent: 'center'

    }

})