import { View, Animated, Easing } from "react-native";
import { I18nextProvider } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import i18n from '../i18n';
import Slide from "@/components/welcomeSlide/Slide";
import Welcome from "@/components/welcome/Welcome";

export default function Index() {
  const [showRedirect, setShowRedirect] = useState(true);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setShowRedirect(false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [opacity]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <I18nextProvider i18n={i18n}>
        {showRedirect ? (
          <Animated.View style={{ opacity }}>
            <Slide />
          </Animated.View>
        ) : <Welcome />}
      </I18nextProvider>
    </View>
  );
};