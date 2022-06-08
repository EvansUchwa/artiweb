import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTuto from '../hooks/useTuto';
import { storeDataToLocal } from '../App';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      {
        item.ending && <Button title="Terminé"
          onPress={() => {
            storeDataToLocal('tuto', 'true')
            // setTheTuto(true)
          }}></Button>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    margin: "auto",
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    textAlign: "center"
  },
  body: {
    textAlign: "center",
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem