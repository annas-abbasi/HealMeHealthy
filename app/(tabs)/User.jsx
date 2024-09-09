import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const User = ({ navigation }) => {
    const data = [
        {
            "id": 1,
            "img": require('../../assets/images/walk.jpg'),
            "name": "User name",
            "call": require('../../assets/icons/call.png'),
            "videoCall": require('../../assets/icons/videoCall.png'),
            "sms": require('../../assets/icons/sms.png')
        },
        {
            "id": 2,
            "img": require('../../assets/images/Pdata.jpg'),
            "name": "User name",
            "call": require('../../assets/icons/call.png'),
            "videoCall": require('../../assets/icons/videoCall.png'),
            "sms": require('../../assets/icons/sms.png')
        },
        {
            "id": 3,
            "img": require('../../assets/images/friends.jpg'),
            "name": "User name",
            "call": require('../../assets/icons/call.png'),
            "videoCall": require('../../assets/icons/videoCall.png'),
            "sms": require('../../assets/icons/sms.png')
        },
    ]

    const handleButtonPress = () => {
        console.log("Button pressed");
    };

    const [shown, setShown] = useState(true);
    const toggleVisibility = () => {
        setShown(!shown);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.InpContainer}>

                    <View style={styles.CheckoutInpItm}>
                        <View style={styles.FrImg}>
                            <Image
                                source={require('../../assets/icons/usered.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <View style={[styles.FrInput, styles.FrPhMonInp]}>
                            <TextInput
                                style={styles.frstName}
                                placeholder='First Name'
                            />
                            <TextInput
                                style={styles.lstName}
                                placeholder='Last Name'
                            />
                        </View>
                    </View>

                    <View style={styles.CheckoutInpItm}>
                        <View style={styles.FrImg}>
                            <Image
                                source={require('../../assets/icons/phone.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <View style={[styles.FrInput, styles.FrPhMonInp]}>
                            <TextInput
                                style={styles.inputPhNum}
                                placeholder='Phone Number'
                            />
                            <TextInput
                                style={styles.inputMob}
                                placeholder='Mobille'
                            />
                        </View>
                    </View>


                    <View style={styles.CheckoutInpItm}>
                        <View style={styles.FrImg}>
                            <Image
                                source={require('../../assets/icons/location.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <View style={styles.FrInput}>
                            <TextInput
                                style={styles.inputName}
                                placeholder='Address'
                            />
                        </View>
                    </View>

                    <View style={styles.CheckoutInpItm}>
                        <View style={styles.FrImg}>
                            <Text>&nbsp;</Text>
                        </View>
                        <View style={[styles.FrInput, styles.FrPhMonInp]}>
                            <TextInput
                                style={styles.inputCity}
                                placeholder='City'
                            />
                            <TextInput
                                style={styles.inputState}
                                placeholder='State'
                            />
                            <TextInput
                                style={styles.inputZip}
                                placeholder='Zip'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.InpContainer}>
                    <View style={styles.CheckoutInpItm}>
                        <View style={styles.FrImg}>
                            <Image
                                source={require('../../assets/icons/mail.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <View style={styles.FrInput}>
                            <TextInput
                                style={styles.inputName}
                                placeholder='Email address *'
                            />
                        </View>
                    </View>

                    <View style={styles.CheckoutInpItm}>
                        <View style={styles.FrImg}>
                            <Image
                                source={require('../../assets/icons/birthday.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <View style={styles.FrInput}>
                            <TextInput
                                style={styles.inputName}
                                placeholder='Birthdate (xx/xx/xxxx)'
                            />
                        </View>
                    </View>
                </View>


                {shown ? (
                    <View style={styles.usersubs}>
                        <View style={styles.usersubsTxt}>
                            <Text style={styles.contHTxt}>List of prescription drugs and dosage</Text>
                            <TouchableOpacity onPress={toggleVisibility} >
                                <Image
                                    source={require('../../assets/icons/close.png')}
                                    style={styles.close} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputcontnr}>

                            <View style={styles.userinp}>
                                <TextInput
                                    placeholder='Input Field'
                                    style={styles.userinp1} />
                                <TextInput
                                    placeholder='msg'
                                    style={styles.userinp2} />
                            </View>

                            <View style={styles.userinp}>
                                <TextInput
                                    placeholder='Input Field'
                                    style={styles.userinp1}
                                />
                                <TextInput
                                    placeholder='msg'
                                    style={styles.userinp2}
                                />
                            </View>

                            <View style={styles.userinp}>
                                <TextInput
                                    placeholder='Input Field'
                                    style={styles.userinp1}
                                />
                                <TextInput
                                    placeholder='msg'
                                    style={styles.userinp2}
                                />
                            </View>

                            <View style={styles.userinp}>
                                <TextInput
                                    placeholder='Input Field'
                                    style={styles.userinp1}
                                />
                                <TextInput
                                    placeholder='msg'
                                    style={styles.userinp2}
                                />
                            </View>

                            <View style={styles.userinp}>
                                <TextInput
                                    placeholder='Input Field'
                                    style={styles.userinp1}
                                />
                                <TextInput
                                    placeholder='msg'
                                    style={styles.userinp2}
                                />
                            </View>

                            <View style={styles.personalData}>
                                <Text style={[styles.contHTxt, styles.marginn]}>personal illness/ailment</Text>

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                            </View>

                            <View style={[styles.personalData, { marginVertical: 0 }]}>
                                <Text style={[styles.contHTxt, styles.marginn]}>familiar illness/ailment</Text>

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                                <TextInput
                                    placeholder='Input Field'
                                    style={[styles.inputName, styles.marginn]} />

                            </View>
                        </View>

                    </View>) : (<View style={styles.showncnt}><Text style={styles.showninstead}>No Data!!</Text></View>)
                }


                <View style={styles.HealthContactCnt}>
                    <Text style={styles.contactHeaderTxt}>Emergency Contact</Text>

                    {data.map((j) => {
                        return (
                            <View style={styles.contactItm} key={j.id}>
                                <View style={styles.userLogoItm}>
                                    <Image
                                        source={j.img}
                                        style={styles.userLogo}
                                    />
                                    <Text style={styles.userName}>{j.name}</Text>
                                </View>
                                <View style={styles.contactItm2}>
                                    <TouchableOpacity>
                                        <Image
                                            source={j.call}
                                            style={styles.contactpc}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Image
                                            source={j.videoCall}
                                            style={styles.contactpc}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Image
                                            source={j.sms}
                                            style={styles.contactpc}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}

                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                            <Text style={styles.buttonText}>Back to calendar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        backgroundColor: '#ffffff',
    },
    InpContainer: {
        width: '96%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingRight: 25,
        alignSelf: 'center'
    },
    CheckoutInpItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 15,
        width: '100%',
        marginVertical: 10
    },
    FrImg: { width: '10%' },
    FrInput: { width: '90%', },
    inputPhNum: {
        width: '60%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    frstName: {
        width: '40%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    lstName: {
        width: '55%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputMob: {
        width: '35%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputName: {
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    FrPhMonInp: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15
    },

    inputCity: {
        width: '40%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputcontnr: {
        padding: 10,
    },
    inputState: {
        width: '30%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    inputZip: {
        width: '20%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    contHTxt: {
        fontSize: 14,
        color: 'gray',
        marginVertical: 5
    },
    showncnt: { width: '100%' },
    showninstead: {
        fontSize: 15,
        width: '50%',
        color: 'gray',
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 30,
        borderColor: 'rgb(8,212,198)',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20
    },
    HealthContactCnt: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    contactHeaderTxt: {
        fontSize: 17,
        color: 'gray',
        marginVertical: 15
    },
    contactItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 15
    },
    close: { width: 25, height: 25 },
    userLogoItm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10
    },
    userLogo: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    userName: {
        color: 'gray',
        fontSize: 14
    },
    contactItm2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15
    },
    contactpc: {
        width: 25,
        height: 25
    },
    usersubs: {
        alignSelf: 'center',
        width: '90%',
        borderWidth: 3,
        borderColor: 'rgb(8,212,198)',
        padding: 10,
        borderRadius: 30
    },
    usersubsTxt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10,
        marginBottom: 20,
        fontWeight: '500'
    },
    userinp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    userinp1: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '65%'
    },
    userinp2: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '35%'
    },
    personalData: {
        marginVertical: 15
    },
    marginn: {
        marginBottom: 15
    },
    btns: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15, flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
        marginBottom: 30
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(8,212,198)",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 5,
        width: '40%'
    },
    buttonText: {
        fontWeight: '600',
        textAlign: "center",
        color: 'white'
    },
});

export default User;