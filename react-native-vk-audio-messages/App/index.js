import React, { Component } from 'react';
import {
    TouchableHighlight,
    ScrollView,
    Dimensions,
    StyleSheet,
    View,
    Text,
    WebView,
} from 'react-native';
import SendMessageView from './SendMessageView';
import DialogCell from './Components/DialogCell';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogs: [],
            users: [],
        };
    }

    getDalogs() {
        let formData = new FormData();
        formData.append('count', '100');
        // formData.append('access_token', access_token);
        formData.append('access_token', this.props.access_token);
        formData.append('v', '5.62');
        formData.append('extended', '1');
        formData.append('fields', 'photo_50,first_name_acc,last_name_acc');
        fetch('https://api.vk.com/method/messages.getDialogs', {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            let users = {};
            let dialogs = [];
            responseJson.response.profiles.map((user, index) => {
                users[user.id] = {name: user.first_name + ' ' + user.last_name, id: user.id, photo: user.photo_50};
            });
            responseJson.response.items.map((item, index) => {
                dialogs.push({
                    id: item.message.chat_id ? 2000000000 + item.message.chat_id : item.message.user_id,
                    isChat: item.message.chat_id ? true : false,
                    chatTitle: item.message.chat_id ? item.message.title : false,
                    chatAvatar: item.message.chat_id ? item.message.photo_50 : false,
                });
            });
            this.setState({
                users: users,
                dialogs: dialogs
            })
        });
    }

    componentDidMount() {
        this.getDalogs();
    }

    render() {
        return (
            <ScrollView style={styles.Main}>
                {this.state.dialogs.map((dialog, index) => {
                    if (dialog.chatTitle) {
                        return <DialogCell key={index} 
                                           name={dialog.chatTitle}
                                           avatar={dialog.chatAvatar}
                                           navig={this.props.navigator}
                                           id={dialog.id}
                                           access_token={this.props.access_token} />;
                    }
                    return this.state.users[dialog.id.toString()] ? <DialogCell key={index} 
                                       name={this.state.users[dialog.id.toString()].name} 
                                       avatar={this.state.users[dialog.id.toString()].photo}
                                       id={dialog.id}
                                       navig={this.props.navigator}
                                       access_token={this.props.access_token}
                    /> : undefined;
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        minHeight: Dimensions.get('window').height,
        // backgroundColor: '#eee',
    },
});

