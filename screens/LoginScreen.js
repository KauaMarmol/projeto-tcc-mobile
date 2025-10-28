import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      {/* Parte superior preta com o logo */}
      <View style={styles.topContainer}>
        <Image
          source={require('../assets/Logo.png')} // Ajuste o caminho conforme o local do arquivo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Parte inferior azul arredondada com o formulário */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="GrowSync"
          placeholderTextColor="#b0c4de"
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholder="••••••"
          placeholderTextColor="#b0c4de"
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container geral
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // preto do topo
  },

  // parte preta superior
  topContainer: {
    flex: 1.1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 400,
    height: 300,
  },

  // parte azul inferior
  bottomContainer: {
    flex: 1.2,
    backgroundColor: '#0052cc',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    alignItems: 'center',
  },

  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },

  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 17,
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    backgroundColor: '#0a3d91',
    borderRadius: 12,
    padding: 15,
    color: '#fff',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#1a1a1a',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },

  link: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
    textDecorationLine: 'underline',
    fontSize: 20,
  },
});
