import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  /* const API_URL = "https://curly-space-trout-4vjgjx6qwq5hqp66-3000.app.github.dev" */
  /* const API_URL = "http://localhost:3000" */

  const fetchData = async () => {
    const ENDPOINT = "/api/user"
    const API_URL = "https://curly-space-trout-4vjgjx6qwq5hqp66-3000.app.github.dev"
    const response = await fetch(API_URL + ENDPOINT);
    const json = await response.json();
    setData(json);
  }

  const postData = async () => {
    const ENDPOINT = "/api/user";
    const body = {
      username: "usuario1",
      email: "usuario1@teste.com.br"
    }
    const response = await fetch(API_URL + ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  });
  const json = await respone.json();
  console.log(json);
}
  return (
    <View style={styles.container}>
      <Text>Carregar Dado do Servidor</Text>
      {
        data?.map(item => {
          return (
            <Text key={item.id}>{item.username}</Text>
          )
        })
      }
      <Button title="Carregar Dados" onPress={fetchData}/>
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