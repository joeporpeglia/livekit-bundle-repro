import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text } from 'react-native';
import * as Livekit from 'livekit-client';

function AppRoot() {
    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}

registerRootComponent(AppRoot);
