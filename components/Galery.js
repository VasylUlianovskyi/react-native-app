import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from 'react-native'

const IMAGES = [
  require('../assets/images/gallery/1.jpg'),
  require('../assets/images/gallery/2.jpg'),
  require('../assets/images/gallery/3.jpg'),
  require('../assets/images/gallery/4.jpg'),
  require('../assets/images/gallery/5.jpg'),
  require('../assets/images/gallery/6.jpg'),
  require('../assets/images/gallery/7.jpg'),
  require('../assets/images/gallery/8.jpg'),
  require('../assets/images/gallery/9.jpg'),
  require('../assets/images/gallery/10.jpg'),
  require('../assets/images/gallery/11.jpg'),
  require('../assets/images/gallery/12.jpg'),
  require('../assets/images/gallery/13.jpg'),
  require('../assets/images/gallery/14.jpg'),
  require('../assets/images/gallery/15.jpg'),
  require('../assets/images/gallery/16.jpg'),
  require('../assets/images/gallery/17.jpg'),
  require('../assets/images/gallery/18.jpg')
]

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3 - 6

export default function FakeGalleryScreen ({ navigation, route }) {
  const handleSelect = img => {
    route.params?.onSelect?.(img)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photo Gallery</Text>
      <FlatList
        data={IMAGES}
        numColumns={3}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelect(item)}
            style={styles.imageWrapper}
          >
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16
  },
  grid: {
    padding: 8
  },
  imageWrapper: {
    margin: 4,
    borderRadius: 6,
    overflow: 'hidden'
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'cover'
  }
})
