import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Home(){
    let [celsius, setCelsius] = useState();
    let [total, setTotal] = useState();

    function Converter(){
        let conversao = (9* parseFloat(celsius) +160) / 5;
        setTotal(conversao);
        alert ("A temperatura " +Celsius + "°C em Fahrenheit é: " + total + "°F");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Conversão de Temperatura</Text>
            <TextInput style={styles.input} onChangeText={setCelsius} placeholder="Celsius"></TextInput>
            <TouchableOpacity style={styles.button} onPress={Converter}>
                <Text style={styles.buttonText}>CONVERTER</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FF8134',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#FFEDE1',
        fontSize: 20,
        padding: 5,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
        width: 100,
        textAlign: 'center',
        color: 'black'
    },
    button:{
        backgroundColor: '#FFEDE1',
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 20,
        color: '#FF8134',
        fontWeight: 'bold',
    }
});