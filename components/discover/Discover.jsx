import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';


export default function () {
    const { t } = useTranslation();


    const data = [
        {
            "id": 1,
            "img": require('../../assets/images/doctor.jpg'),
            "title": t('Organic-Foods'),
            "organic": true
        },
        {
            "id": 2,
            "img": require('../../assets/images/Pdata.jpg'),
            "title": t('Herbal-Remedies'),
            "organic": false
        },
        {
            "id": 3,
            "img": require('../../assets/images/friends.jpg'),
            "title": t('Health-Shop')
        },
        {
            "id": 4,
            "img": require('../../assets/images/walk.jpg'),
            "title": t('Drinks')
        },
    ]
    const [shown, setShown] = useState('All');
    const [review, setReview] = useState(data);
    const router = useRouter();
    const shownItem = (manage) => {
        if (manage === 'All') {
            setReview(data)
        }
        else {
            const change = data.filter(index => index.title === manage)
            setReview(change)
        }
        setShown(manage);
    }
    const handleRouter = () => {
        router.push('/Home')
    }
    return (
        <>
            <View style={styles.DiscoverMain}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.ParentTxtItm}>
                            <TouchableOpacity onPress={handleRouter}>
                                <View style={styles.ParentTxtIt}>
                                    <Image
                                        source={require('../../assets/icons/showleft.png')}
                                        style={styles.gobackimg} />
                                    <Text style={styles.parentTxt}>{t('Find-Remedies')}</Text>
                                </View>
                            </TouchableOpacity>
                            <Image
                                source={require('../../assets/icons/stethoscope.png')}
                                style={styles.stethoscope} />
                        </View>



                        <View style={styles.InpItm}>
                            <View style={styles.SearchMn}>
                                <TextInput
                                    placeholder={t('Type-in-ailment-for-a-remedy')}
                                    style={styles.input}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('RDatabase')}>
                                    <Image
                                        source={require('../../assets/icons/search.png')}
                                        style={styles.search} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.optionSelect}>
                            <ScrollView
                                horizontal={true}
                                style={styles.itemscroll}>
                                <View style={styles.allitemcontainer}>
                                    <TouchableOpacity style={styles.itemscategory} onPress={() => { shownItem('All') }}>
                                        <Text style={styles.categorytext}>{t('All')}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.itemscategory} onPress={() => { shownItem('Organic Foods') }}>
                                        <Text style={styles.categorytext}>{t('Food')}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.itemscategory} onPress={() => { shownItem('Drinks') }}>
                                        <Text style={styles.categorytext}>{t('Juice')}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.itemscategory} onPress={() => { shownItem('Herbal Remedies') }}>
                                        <Text style={styles.categorytext}>{t('Herbs')}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.itemscategory} onPress={() => shownItem('Health Shop')}>
                                        <Text style={styles.categorytext}>{t('Tea')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.DiscoverGrdCnt}>
                            {review.map((index) => {
                                return (
                                    <TouchableOpacity style={styles.discoverPItm} key={index.id}>
                                        <Image source={index.img} style={styles.discoverImg} />
                                        <Text>{index.title}</Text>
                                    </TouchableOpacity>
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
    DiscoverMain: {
        width: '100%',
        flex: 1
    },
    ParentTxtItm: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginVertical: 20,
    },
    ParentTxtIt: {
        display: 'flex',
        paddingTop: 20,
        paddingBottom: 30,
        marginLeft: 15,
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    parentTxt: {
        fontSize: 25,
        fontWeight: '900'
    },
    gobackimg: {
        width: 20,
        height: 20
    },
    search: { width: 25, height: 25, },
    InpItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    SearchMn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '90%',
        borderRadius: 30,
        margin: 'auto'
    },
    optionSelect: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginVertical: 25,
        width: '100%',
    },
    discoverPItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        gap: 10,
        marginBottom: 25
    },
    discoverImg: {
        width: '90%',
        height: 150,
        borderRadius: 30
    },
    DiscoverGrdCnt: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemscategory: {
        width: 100,
        textAlign: 'center'
    },
    allitemcontainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categorytext: { textAlign: 'center', },
    stethoscope: { width: 35, height: 35 },
    itemscroll: { width: '100%', paddingBottom: 18, },
});