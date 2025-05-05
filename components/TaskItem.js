import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function TaskItem ({ item }) {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setExpanded(prev => !prev)
  }

  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.duration}>{item.duration} minutes</Text>
        </View>
        <TouchableOpacity onPress={handleToggle}>
          <Text style={styles.toggle}>{expanded ? '−' : '+'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <LinearGradient
          colors={['#FE653B', '#FFA07A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.filled, { width: `${item.progress}%` }]}
        />
      </View>
      <Text style={styles.percent}>{item.progress}%</Text>

      {expanded && (
        <View style={styles.details}>
          {item.details?.map((step, index) => (
            <Text key={index} style={styles.step}>
              {step}
            </Text>
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  },
  duration: {
    fontSize: 12,
    color: '#ccc'
  },
  toggle: {
    fontSize: 24,
    color: '#fff'
  },
  progressBar: {
    backgroundColor: '#333',
    height: 8,
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 10
  },
  filled: {
    height: 8,
    borderRadius: 6
  },
  percent: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4
  },
  details: {
    marginTop: 10
  },
  step: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 4
  }
})
