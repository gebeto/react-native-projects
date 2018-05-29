import React, { Component } from 'react';
import {
    TouchableHighlight,
    ScrollView,
    Dimensions,
    StyleSheet,
    TextInput,
    AlertIOS,
    Picker,
    View,
    Text,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

let audioFile;
let uploadUrl;
let uploadedFile;
let savedDocumentId;

export default class SendMessageView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progres: 'SEND',
            message: '',
            language: 'ru',
        }
    }

    send() {
        this.getAudioFromString();
    }

    getAudioFromString() {
        this.setState({progres: 'Geting audio from string'});
        // let message = encodeURI('последний тест');
        let message = encodeURI(this.state.message);
        let mesLen = message.length;
        // alert(message + ': ' + mesLen)
        RNFetchBlob.config({
            fileCache : true,
        }).fetch('GET', 'https://translate.google.com/translate_tts?client=it&tl='+this.state.language+'&q='+message+'&hl=ru&total=1&idx=0&textlen='+mesLen+'&prev=target&ie=UTF-8', {
            'User-Agent': "GoogleTranslate/5.5.55004 (iPhone; iOS 10.2; ru; iPhone6,1)"
        })
        .then((res) => {
            audioFile = res.path();
            // alert(res.path());
            this.getUploadServer();
        })

    }

    getUploadServer() {
        this.setState({progres: 'Geting upload server'});
        var data = new FormData();
        data.append('lang', 'ru');
        data.append('type', 'audio_message');
        data.append("access_token", this.props.access_token);
        data.append("v", "5.54");
        fetch("https://api.vk.com/method/docs.getUploadServer", {
                method: "POST",
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'x-www-form-urlencoded'
                },
                body: data
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.response) {
                uploadUrl = responseJson.response.upload_url
                this.uploadFile();
            } else {
                AlertIOS.alert('Ошибка!', 'Что то пошло не так! Зайдите в ВК и отправте любое голосовое сообщение');
            }
        });
    }

    uploadFile() {
        this.setState({progres: 'Uploading file'});
        RNFetchBlob.fetch('POST', uploadUrl, {
            'Content-Type' : 'application/octet-stream',  
        }, [{ name : 'file', filename : 'google.mp3', data : RNFetchBlob.wrap(audioFile) }])
        .then((res) => {
            uploadedFile = res.json().file;
            // alert(uploadedFile);
            this.saveDocument();
        })
        .catch((err) => {
            alert('ERROR uploading file: ' + JSON.stringify(err));
        })
    }

    saveDocument() {
        this.setState({progres: 'Saving document'});
        var data = new FormData();
        data.append("title", "audio.mp3");
        data.append("lang", "ru");
        data.append("file", uploadedFile);
        data.append("access_token", this.props.access_token);
        data.append("v", "5.54");
        fetch("https://api.vk.com/method/docs.save", {
                method: "POST",
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'x-www-form-urlencoded'
                },
                body: data
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.response) {
                let resp = responseJson.response[0];
                savedDocumentId = 'doc' + resp.owner_id + '_' + resp.id;
                this.sendMessage();
            } else {
                AlertIOS.alert('Ошибка!', 'Что то пошло не так! Зайдите в ВК и отправте любое голосовое сообщение');
            }
        });
    }

    sendMessage() {
        this.setState({progres: 'Sending message'});
        var data = new FormData();
        data.append("peer_id", this.props.userId);
        data.append("attachment", savedDocumentId);
        data.append("access_token", this.props.access_token);
        data.append("v", "5.54");
        fetch("https://api.vk.com/method/messages.send", {
                method: "POST",
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'x-www-form-urlencoded'
                },
                body: data
        }).then((response) => {
            this.setState({progres: 'SEND', message: ''});
        });
    }

    changeText(ev) {
        this.setState({
            message: ev 
        });
    }

    changeLanguage(lang) {
        this.setState({language: lang});
    }

    render() {
        return (
        <View style={styles.Main}>
            <TextInput
                value={this.state.message}
                onChangeText={this.changeText.bind(this)}
                placeholder="Сообщение..." 
                style={styles.MesInp}/>
            <TouchableHighlight
                onPress={this.send.bind(this)}
                style={styles.Send}
                underlayColor="#6db0dd">
                <Text style={styles.progresText}>{this.state.progres}</Text>
            </TouchableHighlight>
            <Picker selectedValue={this.state.language}
                    onValueChange={this.changeLanguage.bind(this)}>
                <Picker.Item label="Русский" value="ru" />
                <Picker.Item label="Украинский" value="uk" />
                <Picker.Item label="Английский" value="en" />
            </Picker>
        </View>
        );
    }


}

const styles = StyleSheet.create({
    Main: {
        marginTop: 64,
        flex: 1,
        minHeight: Dimensions.get('window').height,
        marginBottom: 20,
    },
    MesInp: {
        flex: 1,
        maxHeight: 100,
        paddingLeft: 10, 
    },
    progresText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    Send: {
        backgroundColor: 'skyblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        minHeight: 60,
        marginBottom: 2,
        minHeight: 40,
        maxHeight: 40,
        minWidth: 220,
        maxWidth: 220,
        borderRadius: 20,
    }
});
