import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { useState } from 'react';

import Quadrado from './Quadrado';


export default function App() {

  const [jogador, setJogador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [vencedor, setVencedor] = useState(0);
  const [start, setStart] = useState(1);
  const posicoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ]

  function alteraTabuleiro(pos) {
    const novo = tabuleiro;
    novo[pos] = jogador
  }

  const ganhador = function (valor) {
    let isVencedor = 0
    if (vencedor == 0) 
    {
      const a = valor[0]
      const b = valor[1]
      const c = valor[2]

      if (tabuleiro[a] != 0 && tabuleiro[a] == tabuleiro[b] && tabuleiro[b] == tabuleiro[c])
       {
          isVencedor = tabuleiro[0];
       }
    }
    return isVencedor
  }

  function alteraJogador(jogador){
    let isVencedor = 0
    for (const posicao in posicoes) {
      isVencedor = ganhador(posicoes[posicao])
      if (isVencedor != 0) {
        break;
      }
    }
    if (isVencedor == 0) {
      setJogador(jogador);
    } else {
      setVencedor(isVencedor)
    }
  }


  if (vencedor != 0) {
    Alert.alert("Vencedor", "O vencedor é o jogador #" + vencedor)
  }

  function reset() {
    window.location.reload()
  }

  return (
    <View style={styles.container}>

        <View style={styles.texto}>
      {(vencedor != 0) ?
        <Text> O Vencedor é o Jogador {jogador}</Text>:
        <Text> O Proximo Jogador é o #{jogador}</Text>
      }
        </View>
        
       
      
    <View style={styles.tabuleiro}>
      <View>
        <Quadrado
          posicao='0'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
        <Quadrado
          posicao='1'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
        <Quadrado
          posicao='2'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
      </View>

      <View>
        <Quadrado
          posicao='3'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
        <Quadrado
          posicao='4'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
        <Quadrado
          posicao='5'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
      </View>

      < View>
        <Quadrado
          posicao='6'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
        <Quadrado
          posicao='7'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
        <Quadrado
          posicao='8'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          vencedor={vencedor}
          start={start}
          alteraJogador={alteraJogador} />
      </View>
    </View>

    <View style={styles.caixa}>
        <Button
         onPress={reset}
         title="Novo Jogo"
         color="#841584"
         accessibilityLabel="Learn more about this purple button"/>
         </View>
         

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: "flex",
    justifyContent: "center"
    
  },
  tabuleiro: {
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: 'row',
    display: "flex",
    justifyContent: "center"

  },

  caixa:{
    padding: 10
  }


});
