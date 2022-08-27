import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { StC, Font, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { icon_uri } from "@constants/BASE_URL";
import moment from 'moment';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const CardDaily = ({
    item,
    onPress,
    detail,
    selected
}) => {

    let icon = ''
    let name = ''

    if(item?.weather){
        icon = item?.weather[0]?.icon + '@2x.png'
        name = item?.weather[0]?.main
    }

    const setIcon = (items) => {
        let icons = ''
        if(items){
            icons = icon_uri + items?.weather[0]?.icon + '@2x.png'
        }

        return icons
    }

    return (
        <>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Text style={styles.txtTime}>{moment(item.dt_txt).format('ddd, D MMM')}</Text>
                <Image source={{uri: icon_uri + icon}} style={styles.iconWeather}/>
                <View style={[StC.flexR, {width: RFValue(40)}]}>
                    <Text style={styles.txtTemperature}>{parseInt(item?.main?.temp)}</Text>
                    <Icon as={MaterialCommunityIcons} name={'temperature-celsius'} color={Colors.SECONDARY} size={RFValue(2)}/>
                </View>
                <View style={styles.btn}>
                    <Icon as={AntDesign} name={selected ? 'caretup' : 'caretdown'} color={Colors.WHITE} size={RFValue(2)}/>
                </View>
            </TouchableOpacity>
            {selected &&
                detail.map((items, index) => (
                    <View style={styles.card}>
                        <Icon as={Entypo} name={'dot-single'} color={Colors.SECONDARY} size={RFValue(4)}/>
                        <Text style={styles.txtTime}>{moment(items.dt_txt).format('HH:mm')} WIB</Text>
                        <Image source={{uri: setIcon(items)}} style={styles.iconWeather}/>
                        <View style={[StC.flexR, {width: RFValue(40)}]}>
                            <Text style={styles.txtTemperature}>{parseInt(items?.main?.temp)}</Text>
                            <Icon as={MaterialCommunityIcons} name={'temperature-celsius'} color={Colors.SECONDARY} size={RFValue(2)}/>
                        </View>
                        <View style={{width: RFValue(20)}}/>
                    </View>
                ))
            }
        </>

    )
}

export default CardDaily;

const styles = ({
    card:{
        ... StC.p8,
        ... StC.flexR,
        borderRadius: RFValue(5),
        alignItems: 'center',
    },
    txtTime:{
        ... Font.F11,
        ... Font.GRAY,
        ... Font.Medium,
        flex: 1
    },
    txtTemperature:{
        ... Font.F11,
        ... Font.GRAY,
        ... Font.Regular,
        marginRight: RFValue(2),
    },
    iconWeather:{
        width: RFValue(50),
        height: RFValue(30),
        resizeMode: 'contain',
    },
    txtCelcius:{
        ... Font.F7,
        ... Font.SECONDARY,
    },
    btn:{
        ... StC.centerPage,
        width: RFValue(20),
        height: RFValue(20),
        borderRadius: RFValue(5),
        backgroundColor: '#252A59',
    }
})