import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'

export default function ResultScreen ({ route, navigation }) {
  const { selectedImage } = route.params

  const handleExploreApp = () => {
    navigation.navigate('HomeScreen', { selectedImage })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={selectedImage} style={styles.image} />
        <View style={styles.blurWrapper}>
          <BlurView intensity={1} tint='light' style={styles.blur} />
          <LinearGradient
            colors={[
              'transparent',
              'rgba(107, 88, 86, 0.6)',
              'rgba(107, 88, 86, 1)'
            ]}
            style={StyleSheet.absoluteFill}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.progressContainer}>
          <View style={styles.circle}>
            <Text style={styles.percent}>0%</Text>
          </View>
          <View style={styles.progressText}>
            <Text style={styles.level}>High School</Text>
            <Text style={styles.progressLabel}>PROGRESS</Text>
          </View>
        </View>

        <View style={styles.timeBox}>
          <Image
            source={require('../../assets/images/timerIcon.png')}
            style={styles.timerIcon}
          />
          <Text style={styles.duration}>5 Years</Text>
          <Text style={styles.note}>Required to achieve each stage</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleExploreApp}>
          <Text style={styles.buttonText}>Explore App</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B5856'
  },
  blurWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    bottom: 60
  },

  blur: {
    flex: 1
  },
  imageWrapper: {
    height: '60%',
    width: '100%',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    top: -61
  },

  card: {
    backgroundColor: '#80716F',

    borderRadius: 20,
    marginHorizontal: 24,
    marginVertical: '-15%',
    padding: 20
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  percent: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  progressText: {
    justifyContent: 'center'
  },
  level: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  progressLabel: {
    color: '#ddd',
    fontSize: 12,
    marginTop: 2
  },
  timeBox: {
    borderRadius: 16,
    borderColor: '#D7BFBF',
    borderWidth: 1,
    paddingVertical: 25,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 22
  },
  timerIcon: {
    width: 28,
    height: 28,
    marginBottom: 12
  },
  duration: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  note: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FE653B',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
