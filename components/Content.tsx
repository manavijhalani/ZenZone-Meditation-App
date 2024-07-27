import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

interface ContentProps {
    children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
    return (
        <SafeAreaView style={styles.cont}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 12,
    },
});
