import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

export default function App(){
    const [ projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(resp => {
            console.log(resp.data);
            setProjects(resp.data);
        });
    }, []);

    async function handleAddProject(){
        const resp = await api.post('projects',{
            title: `Novo projeto ${Date.now()}`,
            owner: 'Marlon Branco'
        })

        const project = resp.data;

        setProjects([...projects, project])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#329932"/>
            
            <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Lista de Projetos</Text>
            <FlatList 
            data={projects}
            keyExtractor={project => project.id}
            renderItem={({ item: project }) => (
                <Text style={styles.list}>{project.title}</Text>
            )}
            />
            <TouchableOpacity 
            activeOpacity={0.6}
            style={styles.button}
            onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#329932'
    },
    title:{
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        backgroundColor: '#329932'
    },
    list:{
        color: 'white',
        fontSize: 24
    },
    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
    }

})