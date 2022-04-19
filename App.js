import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Quadrado from './Quadrado';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
      <Quadrado/>
      <Quadrado/>
      <Quadrado/>
     </View>

     <View>
      <Quadrado/>
      <Quadrado/>
      <Quadrado/>
     </View>


     <View>
      <Quadrado/>
      <Quadrado/>
      <Quadrado/>
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
    flexDirection: 'row-reverse'
  },
});
