import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
  <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
    <Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable
      style={styles.btn}
      onPress={() => {
        navigation.navigate('Subscribe')
      }}
      >
      <Text style={styles.btnText}>Newsletter</Text>
    </Pressable>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  logo: {
    width: 150,
    height: 200,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 16,
    width: '70%',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 30
  },
  btn: {
    backgroundColor: '#495E57',
    width: '90%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5, 
    marginTop: 60
  },
  btnText: {
    color: 'white', 
    fontWeight: 'bold'
  }
})

export default WelcomeScreen;
