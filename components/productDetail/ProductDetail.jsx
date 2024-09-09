import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetailsScreen = ({ navigation }) => {
    const data = [
        {
            "id": 1,
            "title": "Foods",
            "desc1": "Caption line 1 here",
            "desc2": "Caption line 2 here",
            "img": require('../../assets/images/bpmeter.jpg')
        },
        {
            "id": 2,
            "title": "Juice",
            "desc1": "Caption line 1 here",
            "desc2": "Caption line 2 here",
            "img": require('../../assets/images/doctor.jpg')
        },
        {
            "id": 3,
            "title": "Tea",
            "desc1": "Caption line 1 here",
            "desc2": "Caption line 2 here",
            "img": require('../../assets/images/walk.jpg')
        },
    ]
    const handleButtonPress = () => {
        console.log("Button pressed");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.rdMain}>

                    <View style={styles.rintroCont}>
                        <View>
                            <Text style={styles.cntTxt1}>Illness Name</Text>
                            <Text style={styles.cntTxt2}>(name of Illness)</Text>
                        </View>
                        <Image
                            source={require('../../assets/images/friends.jpg')}
                            style={styles.topimg} />
                    </View>

                    <View style={styles.moduloContainer}>
                        {data.map((item, index) => {
                            return (
                                <View key={index} style={[styles.moduloItm, index % 2 === 0 ? styles.ree : styles.changedModulo]}>
                                    <View>
                                        <Text style={styles.moduloTxt1}>{item.title}</Text>
                                        <Text style={styles.moduloTxt2}>{item.desc1}</Text>
                                        <Text style={styles.moduloTxt3}>{item.desc2}</Text>
                                    </View>
                                    <Image
                                        source={item.img}
                                        style={styles.itmimg}
                                    />
                                </View>
                            )
                        })}
                    </View>

                    <View style={styles.herbsCont}>
                        <Text>Herbs</Text>
                        <View style={styles.herbsBox}>
                            <TouchableOpacity style={styles.bton} onPress={handleButtonPress}>
                                <Text style={styles.buttonTx}>Upgrade</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    itmimg: {
        width: 80,
        height: 80,
        borderRadius: 24
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

    bton: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        borderRadius: 24,
        paddingHorizontal: 25
    },
    buttonTx: {
        color: "white",
        fontWeight: '500',
        textAlign: "center",
    },
    herbsCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 20
    },
    herbsBox: {
        borderWidth: 3,
        borderColor: '#08d4c6',
        borderRadius: 24,
        padding: 20,
        paddingHorizontal: 40
    },
    moduloContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    moduloItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 25,
        paddingHorizontal: 20
    },
    changedModulo: {
        flexDirection: 'row-reverse',
    },
    moduloTxt1: {
        color: '#030303',
        fontSize: 14,
        marginBottom: 8
    },
    moduloTxt2: {
        fontSize: 14,
        marginVertical: 5,
        marginLeft: 8,
        color: '#030303'
    },
    moduloTxt3: {
        fontSize: 14,
        marginVertical: 5,
        marginLeft: 8,
        color: '#030303'
    },
});

export default ProductDetailsScreen;
