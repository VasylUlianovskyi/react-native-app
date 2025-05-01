import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import { COLORS } from '../../constants/COLORS'

export default function HomeScreen ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../../assets/images/header.png')}
          style={styles.headerImage}
        />
        <View style={styles.header}>
          <Text style={styles.title}>
            Starting Point in{'\n'}Your Professional Development.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Let’s Create Your Profile</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../assets/images/iPhone14ProMax.png')}
          style={styles.profileImage}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  scrollContainer: {
    padding: 20
  },
  headerImage: {
    width: '100%',
    resizeMode: 'contain',
    tintColor: COLORS.textLight,
    marginBottom: 20
  },

  header: {
    marginTop: 10,
    marginBottom: 20,
    color: COLORS.textLight
  },
  title: {
    color: COLORS.textLight,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: COLORS.textLight,
    fontWeight: 'bold',
    fontSize: 16
  },
  profileImage: {
    width: '100%',
    borderRadius: 32,
    resizeMode: 'cover'
  }
})
