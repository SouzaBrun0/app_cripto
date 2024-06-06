import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationItens(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitcoin}
                    source={require("../../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayCotation}>05/06/2024</Text>
                </View>
            </View>

                <View style={styles.contextRigth}>
                    <Text style={styles.price}>533331.852</Text>
                </View>
        </View>
    )
}