import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery';

export default function Affirmations() {
    return (
        <View style={styles.container}>
            <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headline}>Change your beliefs with affirmations</Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g) => (
                            <GuidedAffirmationsGallery key={g.title} title={g.title} previews={g.data} />
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    headline: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "white",
        marginTop: 50,
        marginLeft: 10
    },
    container: {
        flex: 1
    }
});
