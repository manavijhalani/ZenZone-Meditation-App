import { View, Text, StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';

export default function AffirmationsPractice() {
    const { itemId } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentences,setsentences]=useState<string[]>();

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationsData = AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart = affirmationsData.find(
                (a) => a.id === Number(itemId)
            );
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                const affirmationsarray=affirmationToStart.text.split(".")
                if(affirmationsarray[affirmationsarray.length-1]===' ')
                {
                    affirmationsarray.pop();
                }
                setsentences(affirmationsarray);
                return;
            }
        }
    }, [itemId]);

    if (!affirmation) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={affirmation?.image} resizeMode="cover" style={styles.background}>
                <View style={styles.overlay}>
                    <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                        <Pressable onPress={() => router.back()} >
                            <AntDesign name="leftcircleo" size={50} color="white" style={styles.leftButton}/>
                        </Pressable>
                        <ScrollView showsHorizontalScrollIndicator={false}>
                            <View >
                                <Text style={styles.afftext}>{affirmation.text} </Text>
                            </View>
                        </ScrollView>
                    
                    </AppGradient>
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
        flex: 1
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    leftButton: {
        top: 35,
        zIndex: 10,
        left: 16,
        position: 'absolute'
    },
    afftext:{
        color:"white",
        fontWeight:'bold',
        fontSize:20,
        marginTop:150,
        marginLeft:30
    }
});
