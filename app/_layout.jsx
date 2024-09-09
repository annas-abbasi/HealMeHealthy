import { DarkTheme, DefaultTheme, ThemeProvider, useNavigationState } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  // const currentRoute = useNavigationState(state => {
  //   const route = state.routes[state.index];
  //   if (route?.name === '(tabs)') {
  //     const nestedRoute = route.state?.routes[route.state.index];
  //     return nestedRoute?.name;
  //   }
  //   return route?.name;
  // });
  const currentRoute = useNavigationState(state => {
    if (!state) return null; // Add this check
    const route = state.routes[state.index];
    if (route?.name === '(tabs)') {
      const nestedRoute = route.state?.routes[route.state.index];
      return nestedRoute?.name;
    }
    return route?.name;
  });

  const handleGoBack = () => {
    router.push('/(tabs)/Home');
  };

  if (!loaded) {
    return null;
  }

  const showGoBackButton = ['screens/checkout', 'screens/doctorTeach', 'screens/food', 'screens/healthQuiz', 'screens/herbs', 'screens/juices', 'screens/productDetail', 'screens/schedule', 'screens/shop', 'screens/tea', 'Calendar', 'User', 'Main', 'Yoga'].includes(currentRoute);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {showGoBackButton && (
        <TouchableOpacity onPress={handleGoBack} style={styles.ParentContainer}>
          <View style={styles.ParentTxtItm}>
            <Image
              source={require('../assets/icons/showleft.png')}
              style={styles.gobackimg}
            />
            <Text style={styles.parentTxt}>Health</Text>
          </View>
        </TouchableOpacity>
      )}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  ParentContainer: {
    paddingTop: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  ParentTxtItm: {
    display: 'flex',
    width: '100%',
    paddingTop: 20,
    marginLeft: 15,
    alignItems: 'start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  gobackimg: {
    width: 20,
    height: 20,
  },
  parentTxt: {
    fontSize: 25,
    fontWeight: '900',
  },
});