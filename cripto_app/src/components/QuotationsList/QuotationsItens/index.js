import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationItens(props){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitcoin}
                    source={require("../../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayCotation}>{props.date}</Text>
                </View>
            </View>

                <View style={styles.contextRigth}>
                    <Text style={styles.price}>{props.valor}</Text>
                </View>
        </View>
    )
}