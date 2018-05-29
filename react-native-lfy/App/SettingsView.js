import React, { Component } from 'react';
import {
    StyleSheet,
    Switch,
    View,
    Text,
} from 'react-native';


export default class SettingsView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello wolrd</Text>
                <Switch />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
    }
});

