import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import meditationImages from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import CustomButton from '@/components/CustomButton';
import { Audio } from 'expo-av';

export default function Meditate() {
    const { id } = useLocalSearchParams();
    const [secondsRemaining, setsecondsRemaining] = useState(10);
    const [isMeditating, setMeditating] = useState(false);
    const [audiosound, setsound] = useState<Audio.Sound>();
    const [isplayingaudio, setPlayingAudio] = useState(false); // to check if audio is playing

    useEffect(() => {
        let timerID: NodeJS.Timeout;
        if (secondsRemaining === 0) {
            setMeditating(false);
            return;
        }

        if (isMeditating) {
            timerID = setTimeout(() => {
                setsecondsRemaining(secondsRemaining - 1);
            }, 1000);
        }

        return () => {
            clearTimeout(timerID);
        };
    }, [secondsRemaining, isMeditating]);

    // Handle button press
    const handlePress = () => {
        router.back(); // Example: navigate back
    };

    const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
    const formattedTimeSeconds = String(Math.floor(secondsRemaining % 60)).padStart(2, "0");

    const toggleMeditationSessionStatus = async () => {
        if (secondsRemaining === 0) {
            setsecondsRemaining(10);
            setMeditating(!isMeditating);
            await toggleSound();
        }
    };

    const toggleSound = async () => {
        const sound = audiosound ? audiosound : await intializesound();
        const status = await sound?.getStatusAsync();
        if (status?.isLoaded && !isplayingaudio) {
            await sound.playAsync();
            setPlayingAudio(true);
        } else if (status?.isLoaded && isplayingaudio) {
            await sound.pauseAsync();
            setPlayingAudio(false);
        }
    };

    const intializesound = async () => {
        const audiofilename = MEDITATION_DATA[Number(id) - 1].audio;
        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audiofilename]
        );
        setsound(sound);
        return sound;
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={meditationImages[Number(id) - 1]}
                style={styles.background}
                resizeMode="cover"
            >
                <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                </AppGradient>

                <Pressable style={styles.leftButton} onPress={handlePress}>
                    <AntDesign name="leftcircleo" size={50} color="white" />
                </Pressable>

                <View style={styles.centeredView}>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}>{formattedTimeMinutes}:{formattedTimeSeconds}</Text>
                    </View>
                </View>

                <View style={styles.button}>
                    <CustomButton title='start Meditation' onPress={toggleMeditationSessionStatus} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    leftButton: {
        position: 'absolute',
        top: 35,
        left: 16,
        zIndex: 10
    },
    centeredView: {
        ...StyleSheet.absoluteFillObject, // Full size of parent (ImageBackground)
        justifyContent: 'center', // Center vertically
        alignItems: 'flex-start' // Center horizontally
    },
    inner: {
        backgroundColor: 'white',
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 55, // Ensures it remains circular
        marginLeft: 150
    },
    innerText: {
        fontSize: 16,
        color: 'black'
    },
    button: {
        marginBottom: 90
    }
});
