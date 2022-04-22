import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';

import Quadrado from './Quadrado';


export default function App() {

  const [jogador, setJogador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function alteraTabuleiro(pos) {

    const novo = tabuleiro;
    novo[pos] = jogador

  }

  const [vencedor, setVencedor] = useState(0);

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


  const ganhador = function (valor) {

    if (vencedor == 0) {
      const a = valor[0]
      const b = valor[1]
      const c = valor[2]


      if (tabuleiro[a] != 0 && tabuleiro[a] == tabuleiro[b] && tabuleiro[b] == tabuleiro[c]) {
        setVencedor(tabuleiro[a])
      }
    }
  }

  posicoes.forEach(ganhador);


  if (vencedor != 0) {
    Alert.alert("O vencedor é o jogador" + vencedor)
  }

  return (
    <View style={styles.container}>

      {(vencedor != 0) ?
        <Text/> :
        <Text> O Proximo Jogador é o #{jogador}</Text>}

      <View>
        <Quadrado
          posicao='0'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
        <Quadrado
          posicao='1'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
        <Quadrado
          posicao='2'
          tabuleiro={alteraTabuleiro}
          jogador={jogador} a
          lteraJogador={setJogador} />
      </View>

      <View>
        <Quadrado
          posicao='3'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
        <Quadrado
          posicao='4'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
        <Quadrado
          posicao='5'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
      </View>

      < View>
        <Quadrado
          posicao='6'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
        <Quadrado
          posicao='7'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
        <Quadrado
          posicao='8'
          tabuleiro={alteraTabuleiro}
          jogador={jogador}
          alteraJogador={setJogador} />
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
