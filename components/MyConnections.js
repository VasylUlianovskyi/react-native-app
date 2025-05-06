import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'

export default function MyConnections ({ navigation }) {
  const pending = [
    {
      id: 1,
      name: 'Robert Johnson',
      role: 'Junior Doctor',
      avatar: require('../assets/images/robJohnson.jpg')
    },
    {
      id: 2,
      name: 'Peter Wilson',
      role: 'Junior Doctor',
      avatar: require('../assets/images/petWilson.jpg')
    }
  ]

  const connections = [
    {
      id: 1,
      name: 'Vince Hall',
      role: 'Student in Collage',
      avatar: require('../assets/images/connections/vince.jpg')
    },
    {
      id: 2,
      name: 'Meena Shah',
      role: 'Student in School',
      avatar: require('../assets/images/connections/meena.jpg')
    },
    {
      id: 3,
      name: 'Maria Lee',
      role: 'Junior Doctor',
      avatar: require('../assets/images/connections/maria.jpg')
    },
    {
      id: 4,
      name: 'Joseph Roads',
      role: 'Student in Collage',
      avatar: require('../assets/images/connections/joseph.jpg')
    },
    {
      id: 5,
      name: 'Mark Clawe',
      role: 'Junior Doctor',
      avatar: require('../assets/images/connections/mark.jpg')
    },
    {
      id: 6,
      name: 'Dean Walsh',
      role: 'Student in Collage',
      avatar: require('../assets/images/connections/dean.jpg')
    }
  ]

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={24} color='#fff' />
          </TouchableOpacity>
          <Text style={styles.title}>My Connections</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Requests (3)</Text>
          {pending.map(user => (
            <View style={styles.pendingItem} key={user.id}>
              <Image source={user.avatar} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.role}>{user.role}</Text>
              </View>
              <TouchableOpacity style={styles.iconCircle}>
                <Entypo name='cross' size={20} color='#fff' />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.iconCircle, styles.acceptCircle]}
              >
                <Ionicons name='checkmark' size={20} color='#fff' />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Connections (74)</Text>

        <TextInput
          style={styles.search}
          placeholder='Search'
          placeholderTextColor='#aaa'
        />

        {connections.map(user => (
          <View style={styles.connectionItem} key={user.id}>
            <Image source={user.avatar} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.role}>{user.role}</Text>
            </View>
            <TouchableOpacity style={styles.disconnectBtn}>
              <Text style={styles.disconnectText}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    paddingBottom: 100,
    marginVertical: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12
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
    marginBottom: 14
  },
  pendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12
  },
  name: {
    color: '#fff',
    fontWeight: 'bold'
  },
  role: {
    color: '#ccc',
    fontSize: 13
  },
  iconCircle: {
    backgroundColor: '#fff2',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6
  },
  acceptCircle: {
    backgroundColor: '#FE653B'
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
  search: {
    backgroundColor: '#fff1',
    borderRadius: 20,
    padding: 12,
    paddingHorizontal: 18,
    color: '#fff',
    marginBottom: 20
  },
  connectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
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
  }
})
