import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const matchesData = [
  {
    id: 1,
    name: 'Eric Morris',
    role: 'Junior Doctor',
    status: 'new',
    avatar: require('../../assets/images/matches/1.jpg')
  },
  {
    id: 2,
    name: 'Glenn Phillips',
    role: 'Student in Collage',
    status: 'connect',
    avatar: require('../../assets/images/matches/2.jpg')
  },
  {
    id: 3,
    name: 'Aaron Black',
    role: 'Student in Collage',
    status: 'connect',
    avatar: require('../../assets/images/matches/3.jpg')
  },
  {
    id: 4,
    name: 'Tracy Rice',
    role: 'Student in Collage',
    status: 'connect',
    avatar: require('../../assets/images/matches/4.jpg')
  },
  {
    id: 5,
    name: 'Matt Bernard',
    role: 'Student in School',
    status: 'connect',
    avatar: require('../../assets/images/matches/5.jpg')
  },
  {
    id: 6,
    name: 'Samaira Karty',
    role: 'Doctor',
    status: 'pending',
    avatar: require('../../assets/images/matches/6.jpg')
  },
  {
    id: 7,
    name: 'William Roy',
    role: 'Junior Doctor',
    status: 'connect',
    avatar: require('../../assets/images/matches/7.jpg')
  },
  {
    id: 8,
    name: 'James Trott',
    role: 'Student in School',
    status: 'accept',
    avatar: require('../../assets/images/matches/8.jpg')
  },
  {
    id: 9,
    name: 'Elyse Lopez',
    role: 'Student in School',
    status: 'connect',
    avatar: require('../../assets/images/matches/9.jpg')
  }
]

export default function Matches ({ navigation, route }) {
  const { selectedImage } = route.params
  const [search, setSearch] = useState('')

  const handleMyProfile = () => {
    navigation.navigate('MyProfile', { selectedImage })
  }

  const handleSettings = () => {
    navigation.navigate('Settings', { selectedImage })
  }

  const openMenu = () => {
    navigation.navigate('Menu')
  }

  const openUserProfile = () => {
    navigation.navigate('UsersProfile', {
      user: {
        name: 'Gregory Ray',
        role: 'Student in Collage',
        avatar: require('../../assets/images/matches/1.jpg'),
        about:
          'I am product designer having 12 years of experience. I am creating memorable experience of web & mobile apps',
        connections: [
          {
            name: 'David Smith',
            role: 'Student in collage',
            avatar: require('../../assets/images/matches/2.jpg')
          },
          {
            name: 'Laura Dean',
            role: 'Student in collage',
            avatar: require('../../assets/images/matches/3.jpg')
          }
        ],
        media: [
          require('../../assets/images/gallery/1.jpg'),
          require('../../assets/images/gallery/2.jpg'),
          require('../../assets/images/gallery/3.jpg')
        ]
      },
      connected: false // false === 'disconnect', true ==='connect'
    })
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={openUserProfile}>
      <View style={styles.itemContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{item.name}</Text>
            {item.status === 'new' && <Text style={styles.newBadge}>NEW</Text>}
          </View>
          <Text style={styles.role}>{item.role}</Text>
        </View>

        {(item.status === 'connect' || item.status === 'new') && (
          <TouchableOpacity style={styles.connectBtn}>
            <Text style={styles.connectText}>Connect</Text>
          </TouchableOpacity>
        )}

        {item.status === 'pending' && (
          <Text style={styles.pendingText}>Pending</Text>
        )}

        {item.status === 'accept' && (
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image source={selectedImage} style={styles.profilePic} />
        <TouchableOpacity onPress={openMenu}>
          <Image
            source={require('../../assets/images/menuIcon.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name='search'
          size={20}
          color='#aaa'
          style={styles.searchIcon}
        />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder='Search'
          placeholderTextColor='#aaa'
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={matchesData.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

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
    backgroundColor: '#5C4649',
    paddingHorizontal: 20
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff'
  },
  searchContainer: {
    backgroundColor: '#fff2',
    borderRadius: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20
  },
  searchIcon: {
    marginRight: 8
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    height: 40
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  role: {
    color: '#ccc',
    fontSize: 14
  },
  newBadge: {
    backgroundColor: '#5EE03B',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 6
  },
  connectBtn: {
    borderColor: '#FE653B',
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 18
  },
  connectText: {
    color: '#FE653B',
    fontWeight: 'bold'
  },
  pendingText: {
    color: '#fff',
    fontWeight: '500'
  },
  acceptBtn: {
    backgroundColor: '#FE653B',
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 18,
    width: 100
  },
  acceptText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
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
