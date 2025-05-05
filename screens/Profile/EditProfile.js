import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

export default function EditProfile ({ navigation }) {
  const [name, setName] = useState('Mike Turner')
  const [bio, setBio] = useState(
    'I am junior heart surgeon in cardiac & thoracic department in Florida since August 2023'
  )

  const handleUpdate = () => {
    console.log('Updated:', name, bio)
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={24} color='#fff' />
          </TouchableOpacity>
          <Text style={styles.title}>Edit My Info</Text>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder='Your name'
          placeholderTextColor='#aaa'
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={bio}
          onChangeText={setBio}
          placeholder='Tell us about yourself'
          placeholderTextColor='#aaa'
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity onPress={handleUpdate} style={styles.button}>
          <LinearGradient
            colors={['#FE653B', '#FF774E']}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Update</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#2a1f1e'
  },
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 14
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 14,
    color: '#fff',
    marginBottom: 20,
    width: '100%'
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    marginTop: 20,
    width: '100%'
  },
  gradient: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
