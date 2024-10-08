import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, TextInput, } from 'react-native';
import { useTranslation } from 'react-i18next';


const CheckoutScreen = ({ cart }) => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      close: require("../../assets/icons/close.png"),
      img: require("../../assets/images/walk.jpg"),
      titleTop: t("Cheap-item"),
      titleBtm: t("in-stock"),
      price: "$1.50",
    },
    {
      id: 2,
      close: require("../../assets/icons/close.png"),
      img: require("../../assets/images/bpmeter.jpg"),
      titleTop: t("Random-item"),
      titleBtm: t("in-stock"),
      price: "$15.95",
    },
    {
      id: 3,
      close: require("../../assets/icons/close.png"),
      img: require("../../assets/images/doctor.jpg"),
      titleTop: t("Random-item"),
      titleBtm: t("out-of-stock"),
      price: "$22.00",
    },
    {
      id: 4,
      close: require("../../assets/icons/close.png"),
      img: require("../../assets/images/Pdata.jpg"),
      titleTop: t("Random-item"),
      titleBtm: t("only-1-left-in-stockk"),
      price: "$5.50",
    },
    {
      id: 5,
      close: require("../../assets/icons/close.png"),
      img: require("../../assets/images/friends.jpg"),
      titleTop: t("Great-item"),
      titleBtm: t("in-stock"),
      price: "$99.99",
    },
  ];


  const handleButtonPress = () => {
    console.log("Button pressed");
  };

  const [drop, setDrop] = useState(false);
  const [select, setSelect] = useState('');
  const mobiles = ['Pk', 'Us', "Uae", 'Uk', 'Ca'];
  const toggleDropdown = () => {
    setDrop(!drop)
  }
  const mobile = (valShown) => {
    setSelect(valShown);
    setDrop(!drop)
  }

  const [state, setState] = useState(false);
  const [stVal, setStval] = useState('');
  const states = ['Pk', 'Us', "Uae", 'Uk', 'Ca'];
  const toggleState = () => {
    setState(!state)
  }
  const theState = (Shown) => {
    setStval(Shown);
    setState(!state)
  }

  const [shown, setShown] = useState(data);

  const toggleshown = (value) => {
    const shownItm = shown.filter(i => i.id !== value)
    setShown(shownItm);
  }

  return (
    <SafeAreaView style={styles.checkoutHeader}>
      <ScrollView>
        <View style={styles.ShopMn}>
          <View style={styles.ItmContainer}>
            {shown.length === 0 ? (
              <TouchableOpacity style={[styles.button, styles.btnroute]}>
                <Text style={styles.buttonText}>{t('Go-to-Shop')}</Text>
                <Image
                  source={require('../../assets/icons/cart.png')}
                  style={styles.btnimgcart}
                />
              </TouchableOpacity>
            ) : (
              shown.map((index) => {
                return (
                  <View key={index.id} style={styles.ChkItm}>
                    <TouchableOpacity onPress={() => toggleshown(index.id)}>
                      <Image source={index.close} style={styles.stockImg} />
                    </TouchableOpacity>
                    <View style={styles.ChkItmMn}>
                      <View style={styles.Cont1Itm}>
                        <Image source={index.img} style={styles.ChkitmImg} />
                        <View style={styles.ImgClose}>
                          <Text>{index.titleTop}</Text>
                          <Text style={styles.stockTxt}>{index.titleBtm}</Text>
                        </View>
                      </View>
                      <Text style={styles.stockPrice}>{index.price}</Text>
                    </View>
                  </View>
                );
              })
            )}
            {shown.length !== 0 && (
              <TouchableOpacity style={styles.buttonProceed} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>{t('Procees-to-Checkout')}</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.InpContainer}>
            <Text style={styles.InpCntTxt}>{t('Shipping')}</Text>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Image
                  source={require("../../assets/icons/usered.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.FrInput}>
                <TextInput style={styles.inputName} placeholder={t('Name')} />
              </View>
            </View>

            <View style={styles.CheckoutInpItmm}>
              <View style={styles.FrImg}>
                <Image
                  source={require("../../assets/icons/phone.png")}
                  style={styles.icon}
                />
              </View>
              <View style={[styles.FrInput, styles.FrPhMonInp]}>
                <TextInput
                  style={styles.inputPhNum} placeholder="Phone Number" />

                <View style={styles.dropMob} onPress={toggleDropdown}>
                  <TextInput placeholder="Mobille" />
                  <TouchableOpacity onPress={toggleDropdown} style={styles.arrowdown}>
                    <Image
                      source={require('../../assets/icons/arrowdown.png')}
                      style={styles.dropImg} />
                    <Text style={styles.arrowsideTxt}>{select}</Text>
                  </TouchableOpacity>
                  {
                    drop &&
                    (<View style={styles.dropdowncnt}>
                      {mobiles.map((option, index) => (
                        <TouchableOpacity style={[styles.optionTxt, index === mobiles.length - 1 ? styles.lastoption : null]} onPress={() => mobile(option)}>
                          <Text style={styles.dropTxt}>{option}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>)
                  }
                </View>


              </View>
            </View>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Image
                  source={require("../../assets/icons/location.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.FrInput}>
                <TextInput style={styles.inputName} placeholder={t('Address')} />
              </View>
            </View>

            <View style={styles.CheckoutInpIt}>
              <View style={styles.FrImg}>
                <Text>&nbsp;</Text>
              </View>
              <View style={[styles.FrInput, styles.FrPhMonInp]}>
                <TextInput style={styles.inputCity} placeholder={t('City')} />

                <View style={styles.dropInp} onPress={toggleState}>
                  <TextInput style={styles.inputState} placeholder={t('State')} />
                  <TouchableOpacity onPress={toggleState} style={styles.arrowdown}>
                    <Image
                      source={require('../../assets/icons/arrowdown.png')}
                      style={styles.dropImg} />
                    <Text style={styles.arrowsideTxt}>{stVal}</Text>
                  </TouchableOpacity>
                  {
                    state &&
                    (<View style={styles.dropdowncnt}>
                      {states.map((option, index) => (
                        <TouchableOpacity style={[styles.optionTxt, index === states.length - 1 ? styles.lastoption : null]} onPress={() => theState(option)}>
                          <Text style={styles.dropTxt}>{option}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>)
                  }
                </View>


                <TextInput style={styles.inputZip} placeholder={t('Zip')} />
              </View>
            </View>

            <View style={[styles.CheckoutInpItm, { marginTop: 30 }]}>
              <View style={styles.FrImg}>
                <Text>&nbsp;</Text>
              </View>
              <View style={styles.FrInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder={t('Name-of-Card')}
                />
              </View>
            </View>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Text>&nbsp;</Text>
              </View>
              <View style={styles.FrInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder={t('Card-Number')}
                />
              </View>
            </View>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Text>&nbsp;</Text>
              </View>
              <View style={[styles.FrInput, styles.FrPhMonInp]}>
                <TextInput style={styles.inputPhNum} placeholder={t('Exp-Date')} />
                <TextInput style={styles.inputMob} placeholder="CVV" />
              </View>
            </View>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Text>&nbsp;</Text>
              </View>
              <View style={styles.FrInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder={t('Billing-Zip-Code')}
                />
              </View>
            </View>
          </View>

          <View style={styles.InpContainer}>
            <Text style={styles.InpCntTxt}>{t('Register')}</Text>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Image
                  source={require("../../assets/icons/mail.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.FrInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder={t('Email-Address')}
                />
              </View>
            </View>

            <View style={styles.CheckoutInpItm}>
              <View style={styles.FrImg}>
                <Image
                  source={require("../../assets/icons/key.png")}
                  style={styles.icon}
                />
              </View>
              <View style={styles.FrInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder={t('Password *')}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, { marginTop: 0, width: "90%" }]}
            onPress={handleButtonPress}
          >
            <Text style={styles.buttonText}>{t('Checkout')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  dropInp: {
    width: "30%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  checkoutHeader: {
    width: "100%",
    zIndex: 0,
    backgroundColor: '#ffffff'
  },
  ShopMn: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    zIndex: 0,
    padding: 10,
  },
  stockImg: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  stockTxt: {
    fontSize: 12,
    color: "gray"
  },
  stockPrice: {
    fontSize: 14,
    color: "gray"
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
  ItmContainer: {
    display: "flex",
    borderWidth: 3,
    borderColor: "rgb(8,212,198)",
    borderRadius: 30,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    gap: 15
  },
  ChkItm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    width: "100%",
    marginVertical: 10,
  },
  icon: { width: 25, height: 25 },
  ChkItmMn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
  },
  ChkitmImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  Cont1Itm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  ImgClose: {
    display: "flex",
    alignItems: "start",
    gap: 10,
  },
  button: {
    backgroundColor: "rgb(8,212,198)",
    paddingVertical: 16,
    borderRadius: 30,
    width: "100%",
    alignSelf: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontWeight: "500",
    textAlign: "center",
  },
  buttonProceed: {
    backgroundColor: "rgb(8,212,198)",
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 30,
    width: "100%",
    alignSelf: "center",
  },
  CheckoutInpItm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
    width: "100%",
    marginVertical: 10,
    zIndex: 0,
  },
  CheckoutInpItmm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
    width: "100%",
    marginVertical: 10,
    zIndex: 3,
  },
  CheckoutInpIt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
    width: "100%",
    marginVertical: 10,
    zIndex: 2,
  },
  inputName: {
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
    zIndex: 0,
  },
  InpContainer: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingRight: 25,
    zIndex: 0,
  },
  InpCntTxt: {
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 15,
    zIndex: 0,
  },
  inputPhn: {
    width: "42%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  inputCity: {
    width: "40%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  inputZip: {
    width: "20%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
    zIndex: 0,
  },
  FrPhMonInp: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
  FrImg: { width: "10%" },
  FrInput: { width: "90%", zIndex: 0 },
  inputPhNum: {
    width: "60%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  inputMob: {
    width: "35%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dropMob: {
    width: "35%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1
  },
  arrowsideTxt: {
    fontSize: 12,
    color: 'gray'
  },
  dropdowncnt: {
    position: 'absolute',
    left: 15,
    top: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  optionTxt: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderBottomColor: 'gray',
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  dropTxt: {
    color: 'black',
    fontWeight: '600'
  },
  btnroute: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  btnimgcart: {
    width: 25,
    height: 25
  },
  ScrollView: { zIndex: 0 },
  widthfull: { width: '100%' },
  dropImg: { width: 13, height: 13 },
  lastoption: { borderBottomWidth: 0 },
});

export default CheckoutScreen;
