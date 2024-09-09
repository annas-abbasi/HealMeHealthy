import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function () {
    const { t } = useTranslation();

    const data = [
        {
            "id": 1,
            "img": require('../../assets/images/doctor.jpg'),
            "title": t("Short-description"),
            "desc": t("Short-caption"),
        },
        {
            "id": 2,
            "img": require('../../assets/images/Pdata.jpg'),
            "title": t("Short-description"),
            "desc": t("Short-caption"),
        },
        {
            "id": 3,
            "img": require('../../assets/images/friends.jpg'),
            "title": t("Short-description"),
            "desc": t("Short-caption"),

        },
        {
            "id": 4,
            "img": require('../../assets/images/walk.jpg'),
            "title": t("Short-description"),
            "desc": t("Short-caption"),
        },
    ]

    const avoidItems = [
        {
            "id": 1,
            "img": require('../../assets/icons/noBeverage.png'),
            "theDesc": t("Short-description-here")
        },
        {
            "id": 2,
            "img": require('../../assets/icons/noBeverage.png'),
            "theDesc": t("Short-description-here")
        },
        {
            "id": 3,
            "img": require('../../assets/icons/noBeverage.png'),
            "theDesc": t("Short-description-here")
        },
        {
            "id": 4,
            "img": require('../../assets/icons/noBeverage.png'),
            "theDesc": t("Short-description-here")
        },
    ]

    return (
        <>
            <View style={styles.juicesheader}>
                <SafeAreaView>
                    <ScrollView>

                        <View style={styles.RintroCont}>
                            <View>
                                <Text style={styles.CntTxt1}>Illness Name</Text>
                                <Text style={styles.CntTxt2}>(name of Illness)</Text>
                            </View>
                            <Image
                                source={require('../../assets/images/Pdata.jpg')}
                                style={{ width: 150, height: 150, borderRadius: 30 }} />
                        </View>

                        <View style={styles.moduloContainer}>
                            {data.map((item, index) => {
                                return (
                                    <View style={styles.moduloItm}>
                                        <Image
                                            source={item.img}
                                            style={{ width: 140, height: 100, borderRadius: 30 }} />

                                        <View style={{ width: '100%', }}>
                                            <Text style={styles.moduloTxt1}>{item.title}</Text>
                                            <Text style={styles.moduloTxt2}>{item.desc}</Text>
                                        </View>
                                    </View>
                                )
                            })}

                        </View>
                        <View style={styles.AvoidListItm}>
                            <Text style={styles.AvoidMnTxt}>Food to avoid</Text>
                            {avoidItems.map((j, i) => {
                                return (
                                    <View style={styles.AvoidList} key={i}>
                                        <Image
                                            source={j.img}
                                            style={styles.avoidImg}
                                        />
                                        <Text style={styles.AvoidDesc}>{j.theDesc}</Text>
                                    </View>
                                );
                            })}
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    juicesheader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    container: {
        width: '95%'
    },
    ParentTxtItm: {
        display: 'flex',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 30,
        marginLeft: 15,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        zIndex: 0,
    },
    parentTxt: {
        fontSize: 25,
        fontWeight: '900'
    },
    gobackimg: {
        width: 20,
        height: 20
    },
    RintroCont: {
        borderWidth: 3,
        borderColor: 'rgb(8,212,198)',
        borderRadius: 30,
        padding: 20,
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginTop: 10,
        alignSelf: 'center'
    },
    CntTxt1: {
        color: 'gray',
        fontSize: 20,
        marginVertical: 5,
        fontWeight: '600'
    },
    CntTxt2: {
        color: 'black',
        fontSize: 20,
        marginVertical: 5,
        fontWeight: '600'
    },
    moduloContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 25,
    },
    moduloItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 25,
    },
    moduloTxt1: {
        fontSize: 13,
        fontWeight: '600',
    },
    moduloTxt2: {
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 5,
        color: 'gray',
    },
    AvoidListItm: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
        borderWidth: 3,
        borderColor: 'rgb(8,212,198)',
        borderRadius: 30,
        gap: 15,
        width: '90%',
        marginBottom: 30
    },
    AvoidMnTxt: { fontSize: 20, fontWeight: '700' },
    AvoidList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 25
    },
    AvoidDesc: {
        width: '70%',
        fontWeight: '500',
        fontSize: 15
    },
    avoidImg: { width: 50, height: 50 }
})