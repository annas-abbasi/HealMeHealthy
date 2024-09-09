import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    const router = useRouter();
    const handleGetStarted = () => {
        router.push('/screens/boarding');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.logoImageContainer}>
                    <Image style={styles.logoImage} source={require('../../assets/splash.png')} />
                </View>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>Heal Me Healthy</Text>
                    <Text style={styles.welcomeTextp}>Discover holistic remedies for all your ailments with just a search</Text>
                </View>
                <View style={styles.welcomebuttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Get Started</Text>
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
        padding: 10,
    },
    logoImageContainer: {
        flex: 3,
        alignItems: 'center',
        paddingTop: 70,
        justifyContent: 'space-between'
    },
    welcomeTextContainer: {
        flex: 2,
        padding: 20,
    },
    welcomebuttonContainer: {
        flex: 1,
    },
    logoImage: {
        width: 310,
        height: 299,
        borderRadius: 8,
    },
    welcomeText: {
        marginTop: 20,
        marginBottom: 20,
        color: '#181818',
        fontSize: 36,
        lineHeight: 47,
        textAlign: 'center',
    },
    welcomeTextp: {
        // marginBottom: 20,
        color: '#181818',
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
        paddingHorizontal: 50,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#08d4c6',
        borderRadius: 24,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
    },
});

export default WelcomeScreen;
