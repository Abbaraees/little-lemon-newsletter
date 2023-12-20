import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onEmailChange] = React.useState('')
  const [keyDisabled, setKeyDisabled] = React.useState(true)

  const handleEmailValidation = (email) => {
    if (validateEmail(email)) {
      setKeyDisabled(false)
    } else {
      setKeyDisabled(true)
    }
  }
  return (
  <View style={styles.container}>
    <Image
      source={require('../assets/little-lemon-logo-grey.png')} 
      style={styles.logo}
    />
    <Text style={styles.subscribeText}>Subscribe to our newsletter for our latest delicious recipes!</Text>
    <TextInput
      value={email} 
      onChangeText={(text) => {
        onEmailChange(text)
        handleEmailValidation(text)
      }} 
      placeholder={'Type your email'} 
      style={styles.emailInput}
      keyboardType='email-address'
    />
    <Pressable
      onPress={() => {
        Alert.alert('Thanks for subscribing, stay tuned!')
      }}
      style={[styles.subscribeBtn, {opacity: keyDisabled ? 0.5 : 1}]}
      disabled={keyDisabled}
    >
      <Text style={styles.subscribeBtnText} >Subscribe</Text>
    </Pressable>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  subscribeText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30
  },
  emailInput: {
    borderWidth: 2,
    borderColor: '#495E57',
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    marginTop: 30,
    padding: 10

  },
  subscribeBtn: {
    width: '100%',
    backgroundColor: '#495E57',
    alignItems: 'center',
    padding: 7,
    borderRadius: 5,
    marginTop: 30
  },
  subscribeBtnText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
export default SubscribeScreen;
