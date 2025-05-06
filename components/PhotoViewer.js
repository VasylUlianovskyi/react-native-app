import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function PhotoViewer ({ route, navigation }) {
  const { image, date } = route.params

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} color='#fff' />
        </TouchableOpacity>
        <Text style={styles.dateText}>{date}</Text>
        <TouchableOpacity>
          <Ionicons name='trash-outline' size={22} color='#fff' />
        </TouchableOpacity>
      </View>

      <Image source={image} style={styles.image} resizeMode='contain' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#5C4649'
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateText: {
    color: '#fff',
    fontSize: 13
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined
  }
})
