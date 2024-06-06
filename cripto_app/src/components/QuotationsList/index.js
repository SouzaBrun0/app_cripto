import React, { Fragment } from "react";
import { View,Text,TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from "./style";

export default function QuotationList(props){
    const daysQury = props.filterDay
    
    return( 
        <Fragment>
      <View style={styles.filters}> 
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() => daysQury(7) } >
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() => daysQury(15) } >
                <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() => daysQury(30) } >
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() => daysQury(90) } >
                <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() => daysQury(180) } >
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            <FlatList
                 data={props.listTransaction}
                 keyExtractor={(item, index) => index.toString()}
                 renderItem={({ item }) => {
                   return <QuotationsItens valor={item.valor} data={item.data} />;
                 }}
               />
        </ScrollView>
      </Fragment>
    )
}