import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GrowSync</Text>
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.label}>NOME</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text style={styles.label}>EMAIL</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>SENHA</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
      <Text style={styles.label}>DATA DE NASCIMENTO</Text>
      <TextInput style={styles.input} value={dataNascimento} onChangeText={setDataNascimento} placeholder="Selecionar" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002F6C',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  label: {
    color: '#fff',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#0a3d91',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});
