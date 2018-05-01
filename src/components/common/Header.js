import React from 'react';
import { View, Text } from 'react-native';

export const Header = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.children}</Text>
    </View>
);

const styles = {
    viewStyle: {
        backgroundColor: '#A5A5A5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
