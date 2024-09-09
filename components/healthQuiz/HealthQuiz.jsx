import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Slider from '@react-native-community/slider';

const HealthquizScreen = ({ navigation }) => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(25);
  const [value3, setValue3] = useState(75);
  const [value4, setValue4] = useState(40);
  const [value5, setValue5] = useState(30);
  const [value6, setValue6] = useState(50);

  const [selectedOption, setSelectedOption] = useState(null);
  const [text, setText] = useState('');

  const onChangeText = (newText) => {
    setText(newText);
  };

  const options = [
    {
      id: 1,
      label: 'Mild',
      imageSource: require('../../assets/icons/001.png'),
    },
    {
      id: 2,
      label: 'Moderate',
      imageSource: require('../../assets/icons/002.png'),
    },
    {
      id: 3,
      label: 'Severe',
      imageSource: require('../../assets/icons/003.png'),
    },
    {
      id: 4,
      label: 'Chronic',
      imageSource: require('../../assets/icons/004.png'),
    },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    // Handle the submission, e.g., send the selected option and comment to a server
    console.log('Selected Option:', selectedOption);
    console.log('Comment:', comment);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.rangeContainer}>
          <View style={styles.rangeRow}>
            <Text style={styles.label}></Text>
            <View style={styles.rowLowHigh}>
              <Text style={styles.low}>Low</Text>
              <Text style={styles.high}>High</Text>
            </View>
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.label}>Sleep:</Text>
            <Slider
              style={styles.slider}
              value={value1}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(newValue) => setValue1(newValue)}
              minimumTrackTintColor="#181818"
              maximumTrackTintColor="#282828"
              thumbTintColor="#181818"
            />
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.label}>Water Intake:</Text>
            <Slider
              style={styles.slider}
              value={value2}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(newValue) => setValue2(newValue)}
              minimumTrackTintColor="#181818"
              maximumTrackTintColor="#282828"
              thumbTintColor="#181818"
            />
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.label}>Apetite:</Text>
            <Slider
              style={styles.slider}
              value={value3}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(newValue) => setValue3(newValue)}
              minimumTrackTintColor="#181818"
              maximumTrackTintColor="#282828"
              thumbTintColor="#181818"

            />
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.label}>Constipation:</Text>
            <Slider
              style={styles.slider}
              value={value4}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(newValue) => setValue4(newValue)}
              minimumTrackTintColor="#181818"
              maximumTrackTintColor="#282828"
              thumbTintColor="#181818"
            />
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.label}>Anxiety:</Text>
            <Slider
              style={styles.slider}
              value={value5}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(newValue) => setValue5(newValue)}
              minimumTrackTintColor="#181818"
              maximumTrackTintColor="#282828"
              thumbTintColor="#181818"
            />
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.label}>Restlessness:</Text>
            <Slider
              style={styles.slider}
              value={value6}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(newValue) => setValue6(newValue)}
              minimumTrackTintColor="#181818"
              maximumTrackTintColor="#181818"
              thumbTintColor="#181818"
            />
          </View>
          <Text style={styles.painSeverityHeading}>Pain Severity</Text>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', }}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.option,
                  selectedOption === option.id && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect(option.id)}
              >
                <Image source={option.imageSource} style={styles.image} />
                <Text style={styles.severityLabel}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ width: '100%' }}>
            <TextInput
              style={styles.whereInput}
              placeholder='Where?'
              value={text}
              onChangeText={onChangeText}
              selectionColor="red" />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: '100%'
  },
  rangeContainer: {
    flex: 5,
    marginTop: 15,
    width: '95%',
    margin: 'auto'
  },
  rangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowLowHigh: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
  },
  low: {
    flex: 1,
    textAlign: 'left',
    fontSize: 14,
    color: '#181818',
  },
  high: {
    flex: 1,
    textAlign: 'right',
    fontSize: 14,
    color: '#181818',
  },
  label: {
    flex: 2,
    marginRight: 5,
    fontSize: 16,
  },
  slider: {
    flex: 3,
    height: 25,
    width: 200, height: 40
  },
  painSeverityContainer: {
    flex: 4,
  },
  painSeverityHeading: {
    textAlign: 'center',
    fontSize: 16,
    color: '#181818',
    marginBottom: 15,
  },
  option: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  selectedOption: {
    borderColor: 'blue',
  },
  image: {
    width: 30,
    height: 30,
  },
  severityLabel: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: '#181818',
  },
  whereInput: {
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30
  },
  submitButton: {
    backgroundColor: '#08d4c6',
    borderRadius: 24,
    marginVertical: 10,
    marginHorizontal: 30,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HealthquizScreen;
