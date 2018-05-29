import React, { Component } from 'react';
import {
    TouchableHighlight,
    NavigatorIOS,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import SendMessageView from '../SendMessageView'

export default class DialogCell extends Component {

    _openDialog() {
        // alert(this.props.id);
        this.props.navig.push({
            component: SendMessageView,
            title: this.props.name,
            passProps: {
                userId: this.props.id,
                access_token: this.props.access_token
            }
        });
    }

    render() {
        return (
            <TouchableHighlight
                    onPress={this._openDialog.bind(this)}
                    underlayColor="#eee"
                    style={styles.container}>
                <View style={styles.Main}>
                    <Image style={styles.Avatar} source={{uri: this.props.avatar}} />
                    <Text style={styles.Title}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: '#fff',
        borderBottomWidth: .5,
        borderBottomColor: '#eee',
        borderTopWidth: .5,
        borderTopColor: '#eee',
    },
    Main: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Title: {
        fontSize: 16,
        // fontWeight: 'bold'
    },
    Avatar: {
        width: 50,
        height: 50,
        margin: 7,
        borderRadius: 25,
    }
});

