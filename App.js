import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';

import Quadrado from './Quadrado';


export default function App()
{

  const [jogador, setJogador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState([ 0,0,0,  0,0,0,  0,0,0 ]);

  function alteraTabuleiro(pos)
  {

    const novo = tabuleiro;
    novo[pos] = jogador

  }

  const [vencedor, setVencedor] = useState(0);

  

  if (tabuleiro [0] !=0 && tabuleiro [0] == tabuleiro[1] && tabuleiro [1] == tabuleiro [2])
  {
    setVencedor = (tabuleiro[0]);
  }
  if (tabuleiro [3] !=0 && tabuleiro [3] == tabuleiro[4] && tabuleiro [4] == tabuleiro [5])
  {
    setVencedor = (tabuleiro[3]);
  }
  if (tabuleiro [6] !=0 && tabuleiro [6] == tabuleiro[7] && tabuleiro [7] == tabuleiro [8])
  {
    setVencedor = (tabuleiro[6]);
  }


  return (
    <View style={styles.container}>

      {(vencedor != 0)? 
      <Text>O vencedor é {vencedor}</Text>:
      <Text> O Proximo Jogador é o #{jogador}</Text>}

      <View>
        <Quadrado 
          posicao = '0' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/>
        <Quadrado 
          posicao = '1' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/> 
        <Quadrado 
          posicao = '2' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} a
          lteraJogador={setJogador}/>
      </View>

      <View>
        <Quadrado 
          posicao = '3' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/>
        <Quadrado 
          posicao = '4' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/> 
        <Quadrado 
          posicao = '5' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/>
      </View>

      < View>
        <Quadrado 
          posicao = '6' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/>
        <Quadrado 
          posicao = '7' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/> 
        <Quadrado 
          posicao = '8' 
          tabuleiro ={alteraTabuleiro} 
          jogador = {jogador} 
          alteraJogador={setJogador}/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: 'row'
  },
});
