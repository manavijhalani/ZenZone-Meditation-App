import { View, Text, StyleSheet, FlatList, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import { StatusBar } from 'expo-status-bar';
import { MEDITATION_DATA } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";


export default function NatureMeditate() {
    return (
        <View style={styles.container}>
            <AppGradient
                // Background Linear Gradient
                colors={["#161b2e", "#0a4d4a", "#766e67"]}
            >
                <View style={styles.headline}>
                    <Text style={styles.welcome}>Welcome Manavi</Text>
                    <Text style={styles.start}>Start Your Meditation Practice</Text>
                </View>
                
                <FlatList
                    data={MEDITATION_DATA}
                    contentContainerStyle={styles.list}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() =>
                                router.push(`/meditate/${item.id}`)
                            }
                            style={styles.press}
                        >
                            <ImageBackground
                                source={MEDITATION_IMAGES[item.id - 1]}
                                resizeMode="cover"
                                style={styles.backgroundImage}
                                imageStyle={{ borderRadius: 10 }}
                            >
                                <LinearGradient
                                    // Gradient from transparent to black
                                    colors={[
                                        "transparent",
                                        "rgba(0,0,0,0.8)",
                                    ]}
                                    style={styles.gradient}
                                >
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </Pressable>
                    )}
                />
            </AppGradient>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 10,
        overflow: 'hidden',
    },
    gradient: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    list: {
        paddingBottom: 150,
        paddingHorizontal: 10,
    },
    headline: {
        marginHorizontal: 10,
        marginTop: 60,
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginBottom: 10,
    },
    start: {
        color: 'white',
        fontSize: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    press: {
        height: 200,
        marginVertical: 10,
        overflow: 'hidden',
        borderRadius: 10,
    }
});
