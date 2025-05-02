import React from 'react'
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
  { id: 1, uri: require('../assets/images/gallery/1.jpg') },
  { id: 2, uri: require('../assets/images/gallery/2.jpg') },
  { id: 3, uri: require('../assets/images/gallery/3.jpg') },
  { id: 4, uri: require('../assets/images/gallery/4.jpg') },
  { id: 5, uri: require('../assets/images/gallery/5.jpg') },
  { id: 6, uri: require('../assets/images/gallery/6.jpg') },
  { id: 7, uri: require('../assets/images/gallery/7.jpg') },
  { id: 8, uri: require('../assets/images/gallery/8.jpg') },
  { id: 9, uri: require('../assets/images/gallery/9.jpg') },
  { id: 10, uri: require('../assets/images/gallery/10.jpg') },
  { id: 11, uri: require('../assets/images/gallery/11.jpg') },
  { id: 12, uri: require('../assets/images/gallery/12.jpg') },
  { id: 13, uri: require('../assets/images/gallery/13.jpg') },
  { id: 14, uri: require('../assets/images/gallery/14.jpg') },
  { id: 15, uri: require('../assets/images/gallery/15.jpg') },
  { id: 16, uri: require('../assets/images/gallery/16.jpg') },
  { id: 17, uri: require('../assets/images/gallery/17.jpg') },
  { id: 18, uri: require('../assets/images/gallery/18.jpg') }
]

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3 - 6

export default function Gallery ({ navigation, route }) {
  const handleSelect = imageObj => {
    navigation.navigate('CropScreen', {
      image: imageObj.uri,
      onConfirm: finalImage => {
        route.params?.onSelect?.(finalImage)
        navigation.goBack()
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photo Gallery</Text>
      <FlatList
        data={IMAGES}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelect(item)}
            style={styles.imageWrapper}
          >
            <Image source={item.uri} style={styles.image} />
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
