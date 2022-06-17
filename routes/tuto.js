import React, { useState } from 'react'
import { View, Text } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'
import data from '../components/data'
import { Pagination } from 'react-native-snap-carousel'
import { Button } from 'react-native'
import { storeDataToLocal } from '../utils/localStorage'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Tuto = ({ navigation }) => {
  const isCarousel = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 100, paddingBottom: 100 }}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setCurrentSlide(index)}
      // loop={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={currentSlide}
        carouselRef={isCarousel}
        dotStyle={{ backgroundColor: "#f44336", width: 20, height: 10, borderRadius: 80 }}
      />
      <View style={{ marginTop: 0, backgroundColor: "transparent" }}>
        <TouchableHighlight style={{
          width: 320,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 8,
          marginBottom: 25,
          overflow: "hidden",
          backgroundColor: "#f44437",
        }}
          onPress={() => {
            if (currentSlide < 2) {
              return isCarousel.current.snapToNext();
            }
            storeDataToLocal('tuto', 'fait')
            navigation.navigate('Home')
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {currentSlide < 2 ? "Suivant" : "Terminé"}
          </Text>
        </TouchableHighlight>
        {
          currentSlide < 2 && <View style={{ textAlign: "center" }}>
            <Text style={{ color: "black", textAlign: "center" }} onPress={() => {
              storeDataToLocal('tuto', 'fait')
              navigation.navigate('Home')
            }}>Passez le tutoriel</Text>
          </View>
        }

      </View>



    </View>


  )
}

export default Tuto