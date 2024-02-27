import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';

export default function App() {

  const [rwf, setRwf] =useState(0);
  const [usd, setUsd] =useState(0);

  const convert = () => {
      const rate =1300;
      var  torwf=usd*rate;
      setRwf(torwf.toFixed(2));
      
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Enter the amount to be converted</Text>
      <TextInput style={styles.input} placeholder="Enter currency in USD" keyboardType='numeric' onChangeText={setUsd} />
      <TouchableOpacity style={styles.button} onPress={convert}>
        <Text>CONVERT TO RWF</Text>
      </TouchableOpacity >
      <Text style={styles.output}>The entered currency in Rwf is: <Text style={styles.rwf} > {rwf} Rwf</Text> </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    width: "85%",
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical:10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    height: 40,
    width: "85%",
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical:10,
  },
  output:{
    fontSize: 15,
    fontWeight: '300',
    width: "85%",
    marginVertical:10,

  },
  rwf:{ 
    fontSize: 16,
    fontWeight:"500"

  }
});
