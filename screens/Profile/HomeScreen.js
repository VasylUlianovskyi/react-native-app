import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import CircularProgress from 'react-native-circular-progress-indicator'

export default function HomeScreen ({ navigation, route }) {
  const { selectedImage } = route.params

  const handleTasks = () => {
    navigation.navigate('TaskScreen')
  }

  const handleEdit = () => {
    navigation.navigate('EditProfile')
  }

  const handleMyProfile = () => {
    navigation.navigate('MyProfile', { selectedImage })
  }

  const handleSettings = () => {
    navigation.navigate('Settings', { selectedImage })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={selectedImage} style={styles.bgImage} />
      <View style={styles.blurWrapper}>
        <BlurView intensity={2} tint='dark' style={styles.blur} />
        <LinearGradient
          colors={[
            'transparent',
            'rgba(107, 88, 86, 0.6)',
            'rgba(94, 83, 82, 1)'
          ]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>

      <View style={styles.topBar}>
        <Image source={selectedImage} style={styles.avatar} />
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/menuIcon.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Mike Turner</Text>
        <Text style={styles.position}>Junior Doctor</Text>
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../assets/images/addPhoto.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleEdit}>
            <Image
              source={require('../../assets/images/edit.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          I am junior heart surgeon in cardiac & thoracic department in Florida
          since August 2023
        </Text>

        <View style={styles.progressCard}>
          <View style={styles.progressWrapper}>
            <CircularProgress
              value={23}
              radius={35}
              maxValue={100}
              progressValueColor={'#fff'}
              activeStrokeColor={'#FE653B'}
              inActiveStrokeColor={'#fff'}
              inActiveStrokeOpacity={0.2}
              inActiveStrokeWidth={6}
              activeStrokeWidth={6}
              valueSuffix={'%'}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.progressTitle}>High School</Text>
            <Text style={styles.progressLabel}>PROGRESS</Text>
          </View>
          <TouchableOpacity onPress={handleTasks}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/matches.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiButton}>
          <Image
            source={require('../../assets/images/AI.png')}
            style={styles.aiText}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMyProfile}>
          <Image
            source={require('../../assets/images/userProfile.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings}>
          <Image
            source={require('../../assets/images/setting.png')}
            style={styles.navIcon}
          />
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
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject
  },
  topBar: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  menuIcon: {
    width: 24,
    height: 24
  },
  profileInfo: {
    marginHorizontal: 20,
    marginTop: 450,
    display: 'flex'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  position: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 4
  },
  description: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 20
  },
  iconGroup: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    justifyContent: 'flex-end',
    gap: 10
  },
  iconButton: {
    marginRight: 10
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#fff'
  },
  progressCard: {
    backgroundColor: 'rgba(128, 113, 111, 0.8);',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginTop: 30,
    alignItems: 'start'
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  progressWrapper: {
    marginRight: 16
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  progressText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  progressLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)'
  },
  buttonText: {
    fontSize: 38,
    color: 'rgba(255, 255, 255, 0.6)',
    position: 'relative',
    top: 10
  },
  bottomNav: {
    position: 'absolute',
    bottom: 1,
    width: '100%',
    height: 80,
    backgroundColor: '#7F6D6D',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  navIcon: {
    width: 24,
    height: 24
  },
  aiButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FE653B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5
  },
  aiText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
