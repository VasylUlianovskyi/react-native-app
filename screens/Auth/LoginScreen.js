import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native'

export default function LoginScreen () {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/interfaceSuccess.png')}
        style={styles.illustration}
      />

      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>
        Please login to start your professional{'\n'}& academic development
      </Text>

      <View style={styles.buttonWrapper}>
        <SocialButton
          icon={require('../../assets/images/appleLogo.png')}
          text='Continue with Apple'
        />
        <SocialButton
          icon={require('../../assets/images/googleLogo.png')}
          text='Continue with Google'
        />
        <SocialButton
          icon={require('../../assets/images/facebookLogo.png')}
          text='Continue with Facebook'
        />
      </View>
    </SafeAreaView>
  )
}

function SocialButton ({ icon, text }) {
  return (
    <TouchableOpacity style={styles.socialButton}>
      <Image source={icon} style={styles.socialIcon} />
      <Text style={styles.socialText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#150501A6',
    blur: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  illustration: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 32
  },
  title: {
    fontSize: 26,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 32
  },
  buttonWrapper: {
    width: 300,
    gap: 16
  },
  socialButton: {
    flexDirection: 'row',
    width: 300,
    height: 56,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 24
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 12
  },
  socialText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14
  }
})
