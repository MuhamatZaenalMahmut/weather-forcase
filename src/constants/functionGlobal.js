import React from 'react';
import { Alert, Dimensions, LayoutAnimation, Platform, ToastAndroid, Text } from 'react-native';
import { Font, Colors } from '@styles';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

export const currencyFloat = (number) => {
    let num = parseFloat(number)
    if(!isNaN(num)){
        if(num.toString().indexOf('.') != -1){
            return 'Rp ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        } else {
            var rupiah = '';
            var numrev = num.toString().split('').reverse().join('');
            for (var i = 0; i < numrev.length; i++) if (i % 3 == 0) rupiah += numrev.substr(i, 3) + '.';

            let ret = rupiah.split('', rupiah.length - 1).reverse().join('')

            if(ret < 0){
                return '- Rp ' + ret.replace('-', '')
            } else {
                return 'Rp ' + ret
            }
        }
    } else {
        return 0
    }
}

export const numberFloat = (number) => {
    let num = parseFloat(number)
    if(!isNaN(num)){
        if(num.toString().indexOf('.') != -1){
            return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        } else {
            var rupiah = '';
            var numrev = num.toString().split('').reverse().join('');
            for (var i = 0; i < numrev.length; i++) if (i % 3 == 0) rupiah += numrev.substr(i, 3) + '.';
            return rupiah.split('', rupiah.length - 1).reverse().join('');
        }
    } else {
        return 0
    }
}

export const formatDate = (date, short) => {
    return short ? moment(date).format('DD MMM YYYY') : moment(date).format('DD MMMM YYYY')
}

export const formatDateTime = (date, type) => {
    return moment(date).format('DD MMMM YYYY (HH:mm)')
}

export const formatDateChats = (date) => {
    return moment(date).format('DD/MM/YY, HH:mm')
}

export const formatDateChatsDetail = (date) => {
    return moment(date).format('HH:mm')
}

export const formatDateDay = (date, short) => {
    return short ? moment(date).format('ddd, D MMM YYYY') : moment(date).format('dddd, DD MMMM YYYY')
}

export const onRotate = () => {
    const { width, height } = Dimensions.get('window')
    return height >= width
}

export const Notif = (title, message) => {
    if (message) {
        Alert.alert(title, message)
    }
}

export const ToastConnection = () => {
    Alert.alert('Perhatian', 'Tidak dapat memproses data, silahkan coba kembali')
}

export const AnimationLayout = () => {
    return LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}

export const showToast = async (msg) => {
    if (Platform.OS == 'ios') {
        Toast.show(`${msg}`, Toast.SHORT);
    } else {
        ToastAndroid.show(`${msg}`, ToastAndroid.SHORT)
    }
}

export const groupedForecast = (arr) => {
    let temp = []

    arr.forEach(element => {

        let find = temp.find(x => moment(x.dt_txt).format('YYYY-MM-DD') == moment(element.dt_txt).format('YYYY-MM-DD'))

        if(!find && temp.length < 4){
            temp.push(element)
        }
    });

    return temp
}