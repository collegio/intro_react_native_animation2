import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const LoadingSpinner = ({ size }) => {
    return (
        <View style={styles.containerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};