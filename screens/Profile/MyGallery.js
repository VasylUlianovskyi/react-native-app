import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const DATA = [
  require('../../assets/images/myGallery/1.jpg'),
  require('../../assets/images/myGallery/2.jpg'),
  require('../../assets/images/myGallery/3.jpg'),
  require('../../assets/images/myGallery/4.jpg'),
  require('../../assets/images/myGallery/5.jpg'),
  require('../../assets/images/myGallery/6.jpg'),
  require('../../assets/images/myGallery/7.jpg'),
  require('../../assets/images/myGallery/8.jpg'),
  require('../../assets/images/myGallery/9.jpg'),
  require('../../assets/images/myGallery/10.jpg')
]

export default function MyGallery ({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)

  const renderItem = ({ item }) => <Image source={item} style={styles.image} />

  const openCustomGallery = () => {
    setModalVisible(false)
    navigation.navigate('Gallery', {
      onSelect: img => setPhoto(img)
    })
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} color='#fff' />
        </TouchableOpacity>
        <Text style={styles.title}>My Photo & Video</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.grid}
      />

      <TouchableOpacity style={styles.addButton} onPress={openCustomGallery}>
        <Ionicons name='add' size={28} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#2a1f1e'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12
  },
  grid: {
    paddingHorizontal: 20,
    paddingBottom: 80
  },
  image: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 16
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FE653B',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  }
})
