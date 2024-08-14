import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

//fonte
import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from '@expo-google-fonts/urbanist';


export default function LocationScreen() {
  const router = useRouter();


  const [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Enquanto a fonte carrega, retorna null (pode ser substituído por um indicador de carregamento)
  }

  return (
    <ImageBackground
      source={require('./background.png')} // Importe a imagem localmente
      style={styles.background}
    >
      <View style={styles.topContainer}>
        <Text style={styles.smallTitle}>Descubra a sua</Text>
        <Text style={styles.bigTitle}>Localização!</Text>
        <Text style={styles.subtitle}>
          Acesse qualquer localização em qualquer lugar em <Text style={styles.highlight}>tempo real!</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/about')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80, // Ajuste a margem superior conforme necessário
    paddingHorizontal: 40,
  },
  smallTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Urbanist_400Regular',
    marginBottom: 5,
    textAlign: 'left',
  },
  bigTitle: {
    fontSize: 40,
    color: '#3B82F6', // Azul para o título "Localização!"
    fontFamily: 'Urbanist_700Bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Urbanist_400Regular',
    textAlign: 'left',
    width: '90%',
    marginBottom: 20,
  },
  highlight: {
    color: '#3B82F6', // Azul para "tempo real!"
    fontFamily: 'Urbanist_700Bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40, // Ajuste a margem inferior conforme necessário
  },
  button: {
    backgroundColor: '#3B82F6', // Azul do botão
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Urbanist_700Bold',
    textAlign: 'center',
  },
});