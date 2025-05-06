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

export default function UserProfileScreen ({ navigation, route }) {
  const { user, connected } = route.params

  const handleConnectToggle = () => {
    console.log(connected ? 'Disconnect' : 'Connect')
  }

  const handleViewAll = () => {
    console.log('View all connections')
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} color='#fff' />
        </TouchableOpacity>

        <View style={styles.header}>
          <Image source={user.avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.role}>{user.role}</Text>
            <TouchableOpacity
              style={connected ? styles.disconnectBtn : styles.connectBtn}
              onPress={handleConnectToggle}
            >
              <Text
                style={connected ? styles.disconnectText : styles.connectText}
              >
                {connected ? 'Disconnect' : 'Connect'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionTitle}>About</Text>
          </View>
          <Text style={styles.sectionText}>
            {user.about || 'No about info provided.'}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionTitle}>Highlights</Text>
          </View>

          <Text style={styles.highlightTitle}>
            GPA & Challenging Coursework
          </Text>
          <Text style={styles.highlightText}>
            Maintaining a 3.8 GPA (with AP Biology & AP Chemistry)
          </Text>

          <Text style={styles.highlightTitle}>Club or Team Involvement</Text>
          <Text style={styles.highlightText}>
            <Text style={styles.bold}>Vice President</Text> of the Science Club;
            participated in regional competitions
          </Text>

          <Text style={styles.highlightTitle}>Volunteer Experience</Text>
          <Text style={styles.highlightText}>
            Completed 30 volunteer hours at Mercy Hospital, assisting staff and
            comforting patients
          </Text>

          <Text style={styles.highlightTitle}>Extracurricular Recognition</Text>
          <Text style={styles.highlightText}>
            Placed in the Top 10 at the State Science Fair for a cardiovascular
            research project
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionTitle}>Connections</Text>
          </View>
          {user.connections?.map((connection, index) => (
            <View style={styles.connectionRow} key={index}>
              <Image
                source={connection.avatar}
                style={styles.connectionAvatar}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.connectionName}>{connection.name}</Text>
                <Text style={styles.connectionRole}>{connection.role}</Text>
              </View>
              <TouchableOpacity style={styles.connectBtnSmall}>
                <Text style={styles.connectText}>Connect</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.viewAllBtn} onPress={handleViewAll}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        {connected && (
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionLine} />
              <Text style={styles.sectionTitle}>Photo & Video</Text>
            </View>
            <View style={styles.mediaRow}>
              {user.media?.map((img, i) => (
                <Image key={i} source={img} style={styles.mediaImage} />
              ))}
            </View>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#5C4649'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5C4649',
    height: 134,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 45
  },
  avatar: {
    width: 100,
    height: 134,
    borderRadius: 12,
    marginRight: 12,
    position: 'relative',
    bottom: 30
  },
  userInfo: {
    width: '70%',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 600
  },
  role: {
    color: '#ccc',
    fontSize: 13,
    paddingBottom: 10
  },
  connectBtn: {
    backgroundColor: '#FE653B',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 24,
    marginRight: 10
  },
  disconnectBtn: {
    backgroundColor: '#7F6D6D',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 24,
    marginRight: 10
  },
  connectText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  },
  disconnectText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  },
  section: {
    backgroundColor: '#4B3B3E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  sectionLine: {
    width: 4,
    height: 16,
    backgroundColor: '#FE653B',
    borderRadius: 2,
    marginRight: 8
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20
  },
  highlightTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12
  },
  highlightText: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4
  },
  bold: {
    fontWeight: 'bold'
  },
  connectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  connectionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  connectionName: {
    color: '#fff',
    fontWeight: 'bold'
  },
  connectionRole: {
    color: '#ccc',
    fontSize: 13
  },
  connectBtnSmall: {
    borderColor: '#FE653B',
    borderWidth: 2,
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 4
  },
  viewAllBtn: {
    backgroundColor: '#6A5A5C',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8
  },
  viewAllText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  mediaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8
  },
  mediaImage: {
    width: 85,
    height: 85,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8
  }
})
