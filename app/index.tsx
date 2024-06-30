import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Aora 2</Text>
            <StatusBar style='auto' />
            <Link href="/profile" style={{ color: 'blue' }}>Profile</Link>
        </View>
    )
}
