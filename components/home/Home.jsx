import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { useTranslation } from 'react-i18next';


const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const handleShop = () => {
    navigation.navigate('Shop');
  };
  const handleQuiz = () => {
    navigation.navigate('Health Quiz');
  };
  const handleSearch = () => {
    navigation.navigate('Discover');
  };
  const handleCalendar = () => {
    navigation.navigate('Calendar');
  };
  const images = [
    require('../../assets/slider_images/slide1.jpeg'),
    require('../../assets/slider_images/slide2.jpg'),
    require('../../assets/slider_images/slide1.jpeg'),
    require('../../assets/slider_images/slide2.jpg'),
    require('../../assets/slider_images/slide2.jpg'),
  ];
  const products = [
    { title: 'Health data', navigate: 'Health Data', icon: require('../../assets/icons/app-icon-brokenh.png') },
    { title: 'Natural remedies', navigate: 'Discover', icon: require('../../assets/icons/sss.png') },
    { title: 'Shop page', navigate: 'Shop', icon: require('../../assets/icons/app-icon04.png') },
    { title: 'Medical quiz', navigate: 'Health Quiz', icon: require('../../assets/icons/app-icon-medi.png') },
  ];
  const newAdditions = [
    { title: 'Food Remedies', navigate: 'Discover', icon: require('../../assets/icons/app-icon-s.png') },
    { title: 'Medical Quiz', navigate: 'Health Quiz', icon: require('../../assets/icons/app-icon-laptop.png') },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, marginTop: 10 }}>
            <Text style={styles.heading}>Welcome to HealMeHealthy!</Text>
          </View>
          <View style={styles.sliderContainer}>
            <View style={{ flex: 1, }}>
              <SliderBox images={images}
                sliderBoxHeight={130}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#000000"
                inactiveDotColor="#dedede"
                paginationBoxVerticalPadding={10}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                  position: "absolute",
                  bottom: -70,
                  padding: 10,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  paddingVertical: 10
                }}
                dotStyle={{
                  width: 56,
                  height: 6,
                  borderRadius: 5,
                  marginHorizontal: -10,
                  padding: 0,
                  margin: 0,
                  backgroundColor: "#dedede",
                }}
                ImageComponentStyle={{ borderRadius: 35, width: '80%', marginLeft: -80, marginBottom: 20 }}
                imageLoadingColor="#2196F3"
              />
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.sliderText}>Explore our remedies!</Text>
            </View>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', marginTop: 60 }}>
              <View style={{ flex: 1, }}>
                <Text style={{ fontSize: 16, color: '#030303', fontWeight: 'bold' }}>Find remedies</Text>
                <Text style={{ fontSize: 14, color: '#030303', }}>Fast and easy</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, borderColor: '#08D4C6', borderWidth: 3, marginTop: 30, paddingHorizontal: 20, borderRadius: 20 }}>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryHeading}>Our Products</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', }}>
                {products.map((product, index) => (
                  <TouchableOpacity key={index} style={styles.productBox} onPress={() => { navigation.navigate(product.navigate); }}>
                    <Image style={styles.productIcon} source={product.icon} />
                    <Text style={styles.productTitle}>{product.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.newAdditionContainer}>
              <Text style={styles.newAdditionHeading}>New additions</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', }}>
                {newAdditions.map((newAddition, index) => (
                  <TouchableOpacity key={index} style={styles.newAdditionBox} onPress={() => { navigation.navigate(newAddition.navigate); }}>
                    <View style={styles.newAdditionIconBox}>
                      <Image style={styles.newAdditionIcon} source={newAddition.icon} />
                    </View>
                    <Text style={styles.newAdditionTitle}>{newAddition.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.ailmentContainer}>
              <Text style={styles.ailmentHeading}>New Ailment Remedy Request</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', padding: 15, borderWidth: 3, borderColor: '#08D4C6', borderRadius: 20, }}>
                <View style={styles.emailUsBox}>
                  <Text style={styles.emailUsText}>Email us</Text>
                  <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.searchButtonText}>Send</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.imageBox}>
                  <Image style={styles.emailImg} source={require('../../assets/icons/home_email_img.jpg')} />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headingContainer: {
    flex: 1,
  },
  heading: {
    marginBottom: 20,
    color: '#181818',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'left',
  },
  sliderContainer: {
    flex: 1,
    backgroundColor: '#08D4C6',
    borderRadius: 30,
    padding: 20,
    paddingBottom: 20,
    overflow: 'hidden'
  },
  sliderBox: {
    flex: 1,
    backgroundColor: 'red',
  },
  sliderText: {
    flex: 1,
    color: '#181818',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'left',
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#030303',
    borderRadius: 20,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  categoryContainer: {
    flex: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  categoryHeading: {
    fontSize: 20,
    color: '#030303',
    marginBottom: 15,
    fontWeight: '700',
  },
  productBox: {
    width: '48%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: '#08D4C6',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    // alignSelf: 'stretch',
    alignItems: 'center',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    // height: 300,
  },
  productIcon: {
    display: 'flex',
    flex: 1,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  productTitle: {
    flex: 3,
    fontSize: 14,
    color: '#030303',
  },
  newAdditionContainer: {
    flex: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  newAdditionHeading: {
    fontSize: 20,
    color: '#030303',
    marginBottom: 15,
    fontWeight: '700',
  },
  newAdditionBox: {
    width: '48%',
    marginBottom: 20,
    display: 'flex',
    // flexDirection: 'row',
    // alignSelf: 'stretch',
    alignItems: 'center',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    // height: 300,
  },
  newAdditionIconBox: {
    flex: 1,
    width: '100%',
    // height: 46,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,

    // padding: 10,
    borderWidth: 3,
    borderColor: '#08D4C6',
    borderRadius: 20,
  },
  newAdditionIcon: {
    // display: 'flex',
    flex: 1,
    width: 46,
    height: 46,
  },
  newAdditionTitle: {
    flex: 1,
    fontSize: 14,
    color: '#030303',
  },
  ailmentContainer: {
    flex: 1,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  ailmentHeading: {
    fontSize: 20,
    color: '#030303',
    marginBottom: 15,
    fontWeight: '700',
  },
  emailUsBox: {
    flex: 1,
    // paddingRight:10,
  },
  imageBox: {
    flex: 1,
  },
  emailImg: {
    // display: 'flex',
    flex: 1,
    width: 129,
    height: 65,
    borderRadius: 20,
  },
  emailUsText: {
    fontSize: 14,
    color: '#181818',
    marginBottom: 10,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#08D4C6',
    borderRadius: 20,
    width: 88,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center'
  },
});

export default HomeScreen;
