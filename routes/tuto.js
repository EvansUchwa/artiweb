import React, { useState } from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'
import data from '../components/data'
import { Pagination } from 'react-native-snap-carousel'
import { Button } from 'react-native'
import { storeDataToLocal } from '../utils/localStorage'

const Tuto = ({ navigation }) => {
  const isCarousel = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
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
      <View>
        {
          currentSlide === 2 && <Button title="terminé"
            onPress={() => {
              storeDataToLocal('Tuto', 'fait')
              navigation.navigate('Home')
            }}></Button>
        }
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={currentSlide}
        carouselRef={isCarousel}

      />


    </View>


  )
}

export default Tuto