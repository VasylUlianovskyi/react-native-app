import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

export default function Settings ({ navigation, route }) {
  const { selectedImage } = route.params
  const [name, setName] = useState('Mike Turner')
  const [bio, setBio] = useState(
    'I am junior heart surgeon in cardiac & thoracic department in Florida since August 2023'
  )

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Image source={selectedImage} style={styles.topAvatar} />
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/menuIcon.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarBlock}>
          <Image source={selectedImage} style={styles.mainAvatar} />
          <TouchableOpacity style={styles.changeBtn}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='Your name'
          placeholderTextColor='#aaa'
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          style={[styles.input, styles.textarea]}
          multiline
        />

        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#5C4649'
  },
  container: {
    padding: 20,
    flex: 1
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  topAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff'
  },
  avatarBlock: {
    alignItems: 'center',
    marginBottom: 30
  },
  mainAvatar: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 12
  },
  changeBtn: {
    borderWidth: 1,
    borderColor: '#fff5',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 16
  },
  changeText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '600'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 14,
    color: '#fff',
    marginBottom: 20
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top'
  },
  updateBtn: {
    backgroundColor: '#FE653B',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20
  },
  updateText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
