import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import TaskItem from '../../components/TaskItem'
import CircularProgress from 'react-native-circular-progress-indicator'
import { LinearGradient } from 'expo-linear-gradient'

const tasks = [
  {
    title: 'Biology',
    duration: 20,
    progress: 45,
    details: ['Read Chapter 5', 'Answer 3 quiz questions']
  },
  {
    title: 'Mathematics',
    duration: 20,
    progress: 33,
    details: [
      'Practice 5 factoring problems or algebraic equations',
      'Check answers or watch tutorial'
    ]
  },
  {
    title: 'Science',
    duration: 15,
    progress: 61,
    details: ['Review lab notes', 'Watch science experiment video']
  },
  {
    title: 'Extracurricular',
    duration: 20,
    progress: 36,
    details: ['Practice instrument or sport', 'Plan club activity']
  },
  {
    title: 'Personal Growth',
    duration: 15,
    progress: 40,
    details: ['Reflect in journal', 'Read a motivational article']
  }
]

export default function TaskScreen ({ navigation }) {
  return (
    <LinearGradient
      colors={['#4E3D39', '#3A2E2D', '#1F1A1A']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <CircularProgress
          value={23}
          radius={30}
          maxValue={100}
          progressValueColor={'#fff'}
          activeStrokeColor={'#FE653B'}
          inActiveStrokeColor={'#fff'}
          inActiveStrokeOpacity={0.2}
          valueSuffix={'%'}
        />
        <View>
          <Text style={styles.title}>High School</Text>
          <Text style={styles.subtitle}>PROGRESS</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dayInfo}>
        <View>
          <Text style={styles.day}>Day 2</Text>
          <Text style={styles.total}>Total: 1h 30m</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/prev.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={item => item.title}
        contentContainerStyle={{ paddingTop: 12 }}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    gap: 12
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#aaa',
    fontSize: 12
  },
  closeIcon: {
    fontSize: 22,
    color: 'rgba(255, 255, 255, 0.6)',
    position: 'relative',
    left: 190
  },
  dayInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  day: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  total: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 10
  },
  button: {
    flexDirection: 'row',
    gap: 5
  }
})
