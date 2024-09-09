import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['custom'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'custom';

const CalendarPage = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image style={styles.calimage} source={require('../../assets/images/calendar.jpg')} />
      </View>
      <Calendar onDayPress={(day) => setSelectedDate(day.dateString)} hideExtraDays={true}
        theme={{
          calendarBackground: '#f0f0f0',
          monthTextColor: '#030303',
          textMonthAlign: 'left',
          textMonthFontSize: 14,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
  },
  calimage: {
    height: 242,
    borderRadius: 10,
    width: '100%'
  }
});

export default CalendarPage;