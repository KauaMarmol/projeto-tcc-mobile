import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); // 'erro' ou 'sucesso'

  const handleDateChange = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    if (cleaned.length > 4) {
      cleaned = cleaned.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
    } else if (cleaned.length > 2) {
      cleaned = cleaned.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }

    setDataNascimento(cleaned);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = () => {
    if (!nome || !email || !senha || !dataNascimento) {
      setMensagem('Preencha todos os campos antes de continuar.');
      setTipoMensagem('erro');
      return;
    }

    if (!validateEmail(email)) {
      setMensagem('Por favor, insira um e-mail válido (ex: exemplo@gmail.com).');
      setTipoMensagem('erro');
      return;
    }

    setMensagem('Conta criada com sucesso!');
    setTipoMensagem('sucesso');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Parte preta com o logo */}
      <View style={styles.topContainer}>
        <Image
          source={require('../assets/Logo.png')} // ajuste o caminho se necessário
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Parte azul com o formulário */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Criar conta</Text>

        {/* Mensagem de erro ou sucesso */}
        {mensagem ? (
          <View
            style={[
              styles.mensagemBox,
              tipoMensagem === 'erro' ? styles.mensagemErro : styles.mensagemSucesso,
            ]}
          >
            <Text style={styles.mensagemTexto}>{mensagem}</Text>
          </View>
        ) : null}

        <Text style={styles.label}>NOME</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholderTextColor="#b0c4de" />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#b0c4de"
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#b0c4de"
        />

        <Text style={styles.label}>DATA DE NASCIMENTO</Text>
        <TextInput
          style={styles.input}
          value={dataNascimento}
          onChangeText={handleDateChange}
          placeholder="dd/mm/yyyy"
          placeholderTextColor="#b0c4de"
          keyboardType="numeric"
          maxLength={10}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já possui uma conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container geral
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
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
    flex: 1.4,
    backgroundColor: '#0052cc',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },

  mensagemBox: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
  },
  mensagemErro: {
    backgroundColor: '#ff4d4d',
  },
  mensagemSucesso: {
    backgroundColor: '#28a745',
  },
  mensagemTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    backgroundColor: '#0a3d91',
    borderRadius: 12,
    padding: 12,
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
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  link: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 0,
    textDecorationLine: 'underline',
    fontSize: 20,
  },
});
