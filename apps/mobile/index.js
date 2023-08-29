import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text } from 'react-native';
import * as RoomClient from '@internal/room-client';

function AppRoot() {
    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}

registerRootComponent(AppRoot);
