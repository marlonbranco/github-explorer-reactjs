import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App(){
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#329932"/>
            <View style={styles.container}>
                <Text style={styles.title}>Hello World</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#329932',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    }

})