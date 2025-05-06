import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Menu ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='close' size={24} color='#fff' />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.item}>How It Work</Text>
        <Text style={styles.item}>Privacy Policy</Text>
        <Text style={styles.item}>Terms & Condition</Text>
        <Text style={styles.item}>Contact Us</Text>
      </View>

      <TouchableOpacity style={styles.signOutBtn}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C4649',
    justifyContent: 'space-between'
  },
  closeBtn: {
    position: 'absolute',
    top: 80,
    right: 24,
    zIndex: 10
  },
  content: {
    marginTop: 120,
    paddingHorizontal: 50
  },
  item: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 32
  },
  signOutBtn: {
    backgroundColor: '#FE653B',
    paddingVertical: 16,
    marginHorizontal: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 40
  },
  signOutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
