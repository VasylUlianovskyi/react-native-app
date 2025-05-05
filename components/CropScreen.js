import React, { useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle
} from 'react-native-reanimated'
import {
  PanGestureHandler,
  PinchGestureHandler
} from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')
const cropSize = width * 0.8

export default function CropScreen ({ route, navigation }) {
  const { image, onConfirm } = route.params

  const scale = useSharedValue(1)
  const lastScale = useSharedValue(1)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const lastOffset = useSharedValue({ x: 0, y: 0 })

  const pinchRef = useRef()
  const panRef = useRef()

  const pinchGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startScale = lastScale.value
    },
    onActive: (event, ctx) => {
      scale.value = ctx.startScale * event.scale
    },
    onEnd: () => {
      if (scale.value < 1) scale.value = 1
      lastScale.value = scale.value
    }
  })

  const panGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = lastOffset.value.x
      ctx.offsetY = lastOffset.value.y
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX
      translateY.value = ctx.offsetY + event.translationY
    },
    onEnd: () => {
      lastOffset.value = {
        x: translateX.value,
        y: translateY.value
      }
    }
  })

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value }
    ]
  }))

  const handleUsePhoto = () => {
    if (onConfirm) onConfirm(image)
    navigation.navigate('ResultScreen', { selectedImage: image })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cropArea}>
        <View style={styles.maskTop} />
        <View style={styles.imageContainer}>
          <PanGestureHandler
            ref={panRef}
            simultaneousHandlers={pinchRef}
            onGestureEvent={panGesture}
          >
            <Animated.View>
              <PinchGestureHandler
                ref={pinchRef}
                simultaneousHandlers={panRef}
                onGestureEvent={pinchGesture}
              >
                <Animated.Image
                  source={image}
                  style={[styles.image, animatedImageStyle]}
                />
              </PinchGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.maskBottom} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUsePhoto}>
        <Text style={styles.buttonText}>Use Photo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20
  },

  closeIcon: {
    fontSize: 22,
    color: '#fff'
  },
  cropArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  maskTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  maskBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: '85%',
    height: cropSize * 1.3,
    overflow: 'hidden',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: cropSize * 1.8,
    height: cropSize * 1.8
  },
  button: {
    backgroundColor: '#FE653B',
    paddingVertical: 14,
    marginHorizontal: 24,
    borderRadius: 30,
    marginBottom: 32,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
