import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Slide() {
    return (
        <View style={styles.slideMain}>
            <Image
                source={require('../../assets/splash.png')}
                style={styles.itemIcn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    slideMain: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemIcn: {
        width: '95%',
        height: '60%'
    },
})