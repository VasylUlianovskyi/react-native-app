import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native'

export default function UploadPhotoScreen ({ navigation }) {
  const [photo, setPhoto] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const openCustomGallery = () => {
    setModalVisible(false)
    navigation.navigate('Gallery', {
      onSelect: img => setPhoto(img)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.avatarWrapper}
      >
        <Image source={require('../../assets/images/UserProfilePhoto.png')} />
      </TouchableOpacity>

      <Text style={styles.title}>Hi, Mike Turner</Text>
      <Text style={styles.subtitle}>
        You are almost done. Please upload your profile pic to start journey
      </Text>

      <Modal transparent visible={modalVisible} animationType='slide'>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.option} onPress={openCustomGallery}>
            <Image
              source={require('../../assets/images/gallery.png')}
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Photo Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Image
              source={require('../../assets/images/camera.png')}
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#513838',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  backText: {
    fontSize: 26,
    color: '#fff'
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 24
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderStyle: 'dashed',
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#FE653B',
    padding: 6,
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 20
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)'
  },
  optionIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#fff'
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 16
  },
  cancel: {
    marginTop: 16,
    textAlign: 'center',
    color: '#ccc',
    fontSize: 14
  }
})
