import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const ENDPOINT = "/api/user";
    const API_URL = "https://curly-space-trout-4vjgjx6qwq5hqp66-3000.app.github.dev";
    const response = await fetch(API_URL + ENDPOINT);
    const json = await response.json();
    setData(json);
  }

  const postData = async () => {
    const ENDPOINT = "/api/user";
    const API_URL = "https://curly-space-trout-4vjgjx6qwq5hqp66-3000.app.github.dev";
    const body = {
      username: "usuario1",
      email: "usuario1@teste.com.br"
    };
    const response = await fetch(API_URL + ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const json = await response.json();
    console.log(json);
  }

  return (
    <View style={styles.container}>
      <Text>Carregar Dados do Servidor</Text>
      {data?.map(item => (
        <Text key={item.id}>{item.username}</Text>
      ))}
      <Button title="Carregar Dados" onPress={fetchData} />
      <Button title="Enviar Dados" onPress={postData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
