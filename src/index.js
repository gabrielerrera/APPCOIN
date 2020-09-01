import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api'


export default function App() {
  const [prices, setPrices] = useState([]);



  async function handleAddProject() {
    const response = await api.post('price', {

      "fsym": "BTC",
      "tsyms": "USD"
        
    });

    

    const price = response.data;

    setPrices([... prices, price]);
    
    console.log(price)
  }



  return ( 
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>  
      <ScrollView style={styles.container}>
        {prices.map(price => (
          <Text style={styles.price} key={price}>{price.USD}</Text>
          
        ))}
      </ScrollView> 

    <TouchableOpacity 
    activeOpacity={0.4} 
    style={styles.button} 
    onPress={handleAddProject}
    >
      <Text style={styles.buttonText}>BTC</Text>
    </TouchableOpacity>
      
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },

  price: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});