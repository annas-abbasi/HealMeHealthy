import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

const BoardingScreen = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const handleRoute = () => {
    router.push('/(tabs)/Home')
  }

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (lng) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
  ];

  const [isChecked, setIsChecked] = useState({
    foodRemedies: false,
    drinkRemedies: false,
    selfcareRemedies: false,
    healthProducts: false,
  });

  const handleContinue = () => {
    navigation.navigate('Main');
  };
  const handleShop = () => {
    navigation.navigate('Shop');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{t('heading')}</Text>
        </View>

        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>{t('paragraph')}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <Image source={require('../../assets/icons/app-icon.png')} style={styles.checkboxIcon} />
            <View style={styles.checkboxLabelContainer}>
              <Text style={styles.checkboxLabel}>{t('food-remedies')}</Text>
              <Text style={styles.checkboxSubLabel}>{t('discover-natural-solution')}</Text>
            </View>
            <CheckBox isChecked={isChecked.foodRemedies} onClick={() => setIsChecked({ ...isChecked, foodRemedies: !isChecked.foodRemedies })} style={{ backgroundColor: isChecked.foodRemedies ? '#ffffff' : '#08D4C6', borderRadius: 5 }} checkBoxColor='#08D4C6' />
          </View>

          <View style={styles.checkboxRow}>
            <Image source={require('../../assets/icons/app-icon.png')} style={styles.checkboxIcon} />
            <View style={styles.checkboxLabelContainer}>
              <Text style={styles.checkboxLabel}>{t('drink-remedies')}</Text>
              <Text style={styles.checkboxSubLabel}>{t('find-remedies-drink')}</Text>
            </View>
            <CheckBox isChecked={isChecked.drinkRemedies} onClick={() => setIsChecked({ ...isChecked, drinkRemedies: !isChecked.drinkRemedies })} style={{ backgroundColor: isChecked.drinkRemedies ? '#ffffff' : '#08D4C6', borderRadius: 5 }} checkBoxColor='#08D4C6' />
          </View>

          <View style={styles.checkboxRow}>
            <Image source={require('../../assets/icons/app-icon02.png')} style={styles.checkboxIcon} />
            <View style={styles.checkboxLabelContainer}>
              <Text style={styles.checkboxLabel}>{t('self-care-remedies')}</Text>
              <Text style={styles.checkboxSubLabel}>{t('take-care-naturally')}</Text>
            </View>
            <CheckBox isChecked={isChecked.selfcareRemedies} onClick={() => setIsChecked({ ...isChecked, selfcareRemedies: !isChecked.selfcareRemedies })} style={{ backgroundColor: isChecked.selfcareRemedies ? '#ffffff' : '#08D4C6', borderRadius: 5 }} checkBoxColor='#08D4C6' />
          </View>

          <View style={styles.checkboxRow}>
            <Image source={require('../../assets/icons/app-icon04.png')} style={styles.checkboxIcon} />
            <View style={styles.checkboxLabelContainer}>
              <Text style={styles.checkboxLabel}>{t('shop-health-products')}</Text>
            </View>
            <CheckBox isChecked={isChecked.healthProducts} onClick={() => setIsChecked({ ...isChecked, healthProducts: !isChecked.healthProducts })} style={{ backgroundColor: isChecked.healthProducts ? '#ffffff' : '#08D4C6', borderRadius: 5 }} checkBoxColor='#08D4C6' />
          </View>
        </View>

        <View style={styles.languageDropdownContainer}>
          <Image source={require('../../assets/icons/app-icon03.png')} style={styles.checkboxIcon} />
          <Text style={styles.languageLabel}>Select Language:</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={handleLanguageChange}
            style={styles.languagePicker}>
            {languageOptions.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>

        <View style={styles.shopLinkContainer}>
          <TouchableOpacity onPress={handleShop}>
            <Text style={styles.shopLinkText}>Visit Shop Page</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.continueButtonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleRoute}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    width: '100%'
  },
  headingContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    color: '#030303',
  },
  paragraphContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 12,
    color: '#030303',
    lineHeight: 20
  },
  checkboxContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  checkboxLabelContainer: {
    flex: 1,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#030303',
  },
  checkboxSubLabel: {
    fontSize: 12,
    color: '#888',
  },
  checkboxInputContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  languageDropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  languageLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  languagePicker: {
    flex: 1,
    height: 40,
  },
  shopLinkContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  shopLinkText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  continueButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#08d4c6',
    borderRadius: 24,
    marginLeft: 'auto',
    width: 120,
    height: 40,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    padding: 8,
  },
});

export default BoardingScreen;