import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Slider from "react-slick";
import sliderStyles from "../assets/slick/slick.css"
function Tuto() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <View style={styles.sliderDiv}>
            <View>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>2</Text>
                    </View>
                    <View>
                        <Text>3</Text>
                    </View>
                    <View>
                        <Text>4</Text>
                    </View>
                    <View>
                        <Text>5</Text>
                    </View>
                    <View>
                        <Text>6</Text>
                    </View>
                </Slider>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    sliderDiv: {
        width: 400,
        backgroundColor: "yellow"
    }
});

export default Tuto
