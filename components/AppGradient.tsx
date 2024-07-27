import { View, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface AppGradientProps {
    children: React.ReactNode;
    colors: string[];
}

export default function AppGradient({ children, colors }: AppGradientProps) {
    return (
        <LinearGradient style={styles.grad} colors={colors}>
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    grad: {
        flex: 1,
    },
});
