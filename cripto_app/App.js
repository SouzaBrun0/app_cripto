import { StatusBar,StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React, {useEffect, useState} from 'react';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationsList';
import QuotationItens from './src/components/QuotationsList/QuotationsItens';

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = 
  `${date.getFullYear()}- ${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(date.getDate()-listLastDays)
  const start_date =
  `${date.getFullYear()}- ${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  return `http://api.coindesck.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
  
}
async function getListCoins(url){
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key) =>{
    return{
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}


async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinsList = Object.keys(selectListQuotationsG).map((key) =>{
      selectListQuotationsG[key]
  });
  let dataG = queryCoinsList();
  return dataG;
}

export default function App() {
    const[CoinsList, setCoinsList] = useState([])
    const[coinsGraphicList, setCoinsGraphicList] = useState([0]);
    const[days, setDays] = useState(30);
    const[updateData, setUpdateData] = useState(true);

  function updateDay(number){
    setDays(number);
    setUpdateData(true)
  }

useEffect(()=>{

    getListCoins(url(days)).then((data)=>{
      setCoinsList(data)
    });
    getPriceCoinsGraphic(url(days)).then((dataG) =>{
      setCoinsGraphicList(dataG)
    });
    if(updateData){
      setUpdateData(false)
    }

},[updateData]);



  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor= '#000000'
      barStyle="light-content"
      />

      <CurrentPrice/>

      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItens filterDay={updateDay} listTransaction={CoinsList}/>
      
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
