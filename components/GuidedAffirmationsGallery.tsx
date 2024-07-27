import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: GalleryPreviewData[];
}

export default function GuidedAffirmationsGallery({ title, previews }: GuidedAffirmationsGalleryProps) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.innerContainer2}>
                <FlatList
                    data={previews}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Link href={`/affirmations/${item.id}`} asChild>
                            <Pressable>
                                <View style={styles.pressableContainer}>
                                    <Image style={styles.image} source={item.image} resizeMode="cover" />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    innerContainer: {
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    innerContainer2: {
        paddingVertical: 20
    },
    pressableContainer: {
        height: 100,
        width: 100,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
