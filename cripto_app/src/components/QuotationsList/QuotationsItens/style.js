import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width:"95%",
        height:66,
        backgroundColor: '#000000',
        marginLeft:"3%",
        marginTop:-300,
        marginBottom:260,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    dayCotation:{
        fontSize:16,
        paddingLeft:2,
        color:"#ffffff",
        fontWeight:"bold"
    },
    logoBitcoin:{
        width:40,
        height:40,
        marginLeft:2
    },
    price:{
        color:"#ffffff",
        fontSize:18,
        fontWeight:"bold",
    },
    boxLogo:{
        flexDirection:"row",
        alignItems:"center",
    },
    contextLeft:{
        width:"36%",
        alignItems:"flex-start"
    }, 
    contextRigth:{
        width:"60%",
        alignItems:"flex-end"
    }
})

export default styles