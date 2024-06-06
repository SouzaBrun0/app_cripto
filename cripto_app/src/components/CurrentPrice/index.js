import React from "react";
import { View,Text } from "react-native";
import styles, { Style } from "./style";

export default function CurrentPrice(){
    return( 
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 54223,365</Text>
            <Text style={styles.textPrice}>Ultima Cotação</Text>
        </View>
    )
}