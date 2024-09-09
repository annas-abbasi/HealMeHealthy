import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

const JuicesScreen = ({ navigation }) => {
    const data = [
        {
            "id": 1,
            "img": require('../../assets/images/doctor.jpg'),
            "desc": "Short description here.",
            "caption": "The caption another caption and the description here",
        },
        {
            "id": 2,
            "img": require('../../assets/images/Pdata.jpg'),
            "desc": "Short description here.",
            "caption": "The caption another caption and the description here",
        },
        {
            "id": 3,
            "img": require('../../assets/images/friends.jpg'),
            "desc": "Short description here.",
            "caption": "The caption another caption and the description here",

        },
        {
            "id": 4,
            "img": require('../../assets/images/walk.jpg'),
            "desc": "Short description here.",
            "caption": "The caption another caption and the description here",
        },
    ]
    return (
        <SafeAreaView style={styles.juicesheader}>
            <ScrollView>
                <View style={styles.rdMain}>
                    <View style={styles.rintroCont}>
                        <View>
                            <Text style={styles.cntTxt1}>Illness Name</Text>
                            <Text style={styles.cntTxt2}>(name of Illness)</Text>
                        </View>
                        <Image
                            source={require('../../assets/images/Pdata.jpg')}
                            style={styles.topimg} />
                    </View>

                    <View style={styles.moduloContainer}>
                        {data.map((item, index) => {
                            return (
                                <View key={index} style={styles.moduloItm}>
                                    <Image
                                        source={item.img}
                                        style={styles.itmimg} />

                                    <View style={styles.textArea}>
                                        <Text style={styles.moduloTxt1}>{item.desc}</Text>
                                        <Text style={styles.moduloTxt2}>{item.caption}</Text>
                                    </View>
                                </View>
                            )
                        })}

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    juicesheader: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },

    rdMain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
    topimg: {
        width: 112,
        height: 112,
        borderRadius: 24,
        marginRight: 10,
    },
    rintroCont: {
        borderWidth: 3,
        borderColor: 'rgb(8,212,198)',
        borderRadius: 30,
        padding: 20,
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '97%',
        marginTop: 10
    },
    cntTxt1: {
        color: '#030303',
        fontSize: 16,
        marginVertical: 5,
        fontWeight: '500'
    },
    cntTxt2: {
        color: '#030303',
        fontSize: 16,
        marginVertical: 5,
        fontWeight: '700'
    },
    moduloContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
    moduloItm: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '95%',
        marginVertical: 20,
    },
    itmimg: {
        width: 80,
        height: 80,
        borderRadius: 24
    },
    textArea: {
        width: '90%',
        marginLeft: 20,
    },
    moduloTxt1: {
        color: '#030303',
        fontSize: 14,
    },
    moduloTxt2: {
        fontSize: 13,
        color: 'grey',
        width: '80%',
    },
});

export default JuicesScreen;
