import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IMAGES = [
  { id: 1, uri: require('../../assets/images/myPictures/mypicture1.jpg') },
  { id: 2, uri: require('../../assets/images/myPictures/mypicture2.jpg') },
  { id: 3, uri: require('../../assets/images/myPictures/mypicture3.jpg') },
  { id: 4, uri: require('../../assets/images/myPictures/mypicture4.jpg') },
  { id: 5, uri: require('../../assets/images/myPictures/mypicture5.jpg') },
  { id: 6, uri: require('../../assets/images/myPictures/mypicture6.jpg') },
  { id: 7, uri: require('../../assets/images/myPictures/mypicture7.jpg') },
  { id: 8, uri: require('../../assets/images/myPictures/mypicture8.jpg') },
  { id: 9, uri: require('../../assets/images/myPictures/mypicture9.jpg') },
  { id: 10, uri: require('../../assets/images/myPictures/mypicture10.jpg') }
]

export default function MyProfile ({ navigation, route }) {
  const { selectedImage } = route.params

  const handleMyConnections = () => {
    navigation.navigate('MyConnections')
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={selectedImage} style={styles.smallAvatar} />
          <TouchableOpacity>
            <Ionicons name='menu' size={28} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.profileCard}>
          <Image source={selectedImage} style={styles.largeAvatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Mike Turner</Text>
            <Text style={styles.role}>Junior Doctor</Text>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareText}>Share Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionText}>
            I am junior heart surgeon in cardiac & thoracic department in
            Florida since August 2023
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightTitle}>
              GPA & Challenging Coursework
            </Text>
            <Text style={styles.highlightDesc}>
              Maintaining a 3.8 GPA (with AP Biology & AP Chemistry)
            </Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightTitle}>Club or Team Involvement</Text>
            <Text style={styles.highlightDesc}>
              Vice President of the Science Club; participated in regional
              competitions
            </Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightTitle}>Volunteer Experience</Text>
            <Text style={styles.highlightDesc}>
              Completed 30 volunteer hours at Mercy Hospital, assisting staff
              and comforting patients
            </Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightTitle}>
              Extracurricular Recognition
            </Text>
            <Text style={styles.highlightDesc}>
              Placed in the Top 10 at the State Science Fair for a
              cardiovascular research project
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.connectionsHeader}>
            <Text style={styles.sectionTitle}>My Connections</Text>
            <Text style={styles.pending}>3 pending requests</Text>
          </View>

          <View style={styles.connectionItem}>
            <Image
              source={require('../../assets/images/user1.jpg')}
              style={styles.connAvatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.connName}>Vince Hall</Text>
              <Text style={styles.connDesc}>Student in Collage</Text>
            </View>
            <TouchableOpacity style={styles.disconnectBtn}>
              <Text style={styles.disconnectText}>Disconnect</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.connectionItem}>
            <Image
              source={require('../../assets/images/user2.jpg')}
              style={styles.connAvatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.connName}>Meena Shah</Text>
              <Text style={styles.connDesc}>Student in School</Text>
            </View>
            <TouchableOpacity style={styles.disconnectBtn}>
              <Text style={styles.disconnectText}>Disconnect</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.viewAllBtn}
            onPress={handleMyConnections}
          >
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Photo & Video</Text>
          <View style={styles.photoRow}>
            {IMAGES.slice(0, 3).map(item => (
              <Image
                key={item.id}
                source={item.uri}
                style={styles.photo}
                resizeMode='cover'
              />
            ))}
          </View>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
    paddingBottom: 100
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#3b2a29',
    borderRadius: 14,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  largeAvatar: {
    width: 100,
    height: 134,
    borderRadius: 16,
    marginBottom: 10,
    position: 'relative',
    top: -30
  },
  profileInfo: {
    width: '70%',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  role: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10
  },
  shareButton: {
    backgroundColor: '#FE653B',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 24
  },
  shareText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  section: {
    backgroundColor: '#3b2a29',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  sectionText: {
    color: '#ddd',
    fontSize: 14
  },
  highlightItem: {
    marginBottom: 12
  },
  highlightTitle: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4
  },
  highlightDesc: {
    color: '#ccc',
    fontSize: 13
  },
  connectionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  pending: {
    color: '#aaa',
    fontSize: 12
  },
  connectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14
  },
  connAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  connName: {
    color: '#fff',
    fontWeight: 'bold'
  },
  connDesc: {
    color: '#aaa',
    fontSize: 12
  },
  disconnectBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#fff1'
  },
  disconnectText: {
    color: '#fff',
    fontSize: 12
  },
  viewAllBtn: {
    backgroundColor: '#fff1',
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 10,
    alignItems: 'center'
  },
  viewAllText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  photoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  photo: {
    width: 115,
    height: 80,
    borderRadius: 10
  }
})
