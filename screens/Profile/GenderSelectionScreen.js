import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

export default function GenderSelectionScreen () {
  const navigation = useNavigation()

  const handleCreateProfile = () => {
    navigation.navigate('UploadPhoto')
  }

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        <View style={styles.slide}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/images/male.jpg')}
              style={styles.image}
            />
            <View style={styles.darkOverlay} />
          </View>
          <View style={styles.overlay}>
            <Text style={styles.name}>Frank Whittaker</Text>
            <Text style={styles.role}>Junior Doctor</Text>
            <Text style={styles.description}>
              I am junior heart surgeon in cardiac & thoracic department in
              Florida since August 2923
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCreateProfile()}
          >
            <Text style={styles.buttonText}>Create Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/images/female.jpg')}
              style={styles.image}
            />
            <View style={styles.darkOverlay} />
          </View>
          <View style={styles.overlay}>
            <Text style={styles.name}>Melissa Dion</Text>
            <Text style={styles.role}>Junior Doctor</Text>
            <Text style={styles.description}>
              Dedicated to providing personalized, cutting-edge care to patients
              with a wide range of heart conditions.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCreateProfile()}
          >
            <Text style={styles.buttonText}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#513838',
    paddingTop: 10
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    resizeMode: 'cover'
  },
  overlay: {
    position: 'absolute',
    width: '80%',
    bottom: 160,
    left: 40,
    right: 40
  },
  name: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 25
  },
  role: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 4
  },
  description: {
    color: '#fff',
    fontSize: 17,
    paddingTop: 25
  },
  button: {
    backgroundColor: '#FE653B',
    width: '93%',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 32,
    position: 'relative',
    bottom: '2%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 25,
    height: 8,
    borderRadius: 4,
    margin: 4,
    position: 'relative',
    top: -90,
    right: 145
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 25,
    height: 10,
    borderRadius: 5,
    margin: 4,
    position: 'relative',
    top: -90,
    right: 145
  },
  imageWrapper: {
    width: '93%',
    height: '87%',
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
    top: 10
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
})
