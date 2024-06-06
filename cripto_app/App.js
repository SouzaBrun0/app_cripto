import { StatusBar,StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React from 'react';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationsList';
import QuotationItens from './src/components/QuotationsList/QuotationsItens';

function addZero(number){
  if(number <=9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = 
  `${date.getFullYear()}- ${addZero$(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(data.getDate()-listLastDays)
  const start_date =
  `${date.getFullYear()}- ${addZero$(date.getMonth()+1)}-${addZero(date.getDate())}`
  return `http://api.coindesck.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
  
}

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor= '#000000'
      barStyle="light-content"
      />

      <CurrentPrice/>

      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItens/>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android"? 40: 0
    // se a plataforma for igual a android aplique 40 se nao aplique zero
  },
});
