import React from 'react';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tabs.Screen
                name='Home'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../../assets/icons/homeIcn.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='Yoga'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../../assets/icons/yogaIcn.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='Main'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ borderColor: 'white', borderWidth: 2, paddingVertical: 12, paddingHorizontal: 12, borderRadius: 50, backgroundColor: 'white' }}>
                            <Image
                                source={require('../../assets/icons/likeIcn.png')}
                                style={{ width: size, height: size }}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name='Calendar'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../../assets/icons/calendarIcn.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='User'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../../assets/icons/userIcn.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}


const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        backgroundColor: 'rgb(8,212,198)'
    },
});