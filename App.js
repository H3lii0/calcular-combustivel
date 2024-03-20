//import React from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';


export default function App(){

    const[alcool, setAlcool] = useState(''); 
    const[gasolina, setGasolina] = useState('');

    function Calcular(){
        const a = parseFloat(alcool) / parseFloat(gasolina);
        
        
        console.log(a)
        
        if(a < 0.7){
             Alert.alert('Compensa usar alcool');
        }else{
            Alert.alert('Compensa usar Gasolina');   
        }
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image
                    source={{ uri:'https://get.pxhere.com/photo/gas-station-icon-sign-fuel-gasoline-pump-gas-pump-fuel-pump-Fuel-station-gasoline-station-flat-transport-city-street-design-symbol-app-icon-blue-text-font-product-teal-aqua-logo-graphic-design-brand-technology-graphics-illustration-computer-wallpaper-1446985.jpg'}}
                    style={styles.logo} 
               />  
                <Text style={styles.title}>Gasolina</Text>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="R$"
                    planceholderTextColor="003f5c"
                    onChangeText={text => setGasolina(text)}
                    value={gasolina}
                    keyboardType='numeric'
                    />
                </View>
                <Text style={styles.title}>Alcool</Text>
                <View style={styles.inputView}>
                    
                    <TextInput
                    style={styles.inputText}
                    placeholder="R$"
                    planceholderTextColor="003f5c"
                    onChangeText={text  => setAlcool(text)}
                    value={alcool}
                    keyboardType='numeric'
                    />
                </View>
                    
                    <Button style={styles.button}
                        onPress={Calcular}
                        title='calcular'
                        width= '100'/>
            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18283D'
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
        borderRadius: 75,
    },
    inputView: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginLeft: 3,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'row',
        alignItems:'center',   
        borderColor: 'black',
    },
    title: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    inputText: {
        height:50,
        color:'black',
        flex: 1,
        borderColor: 'black',
    },
    button: {
        borderRadius: 25,
    },
    loginText: {
        color: 'white',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#f5f5dc'
    },  
});
