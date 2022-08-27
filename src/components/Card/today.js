import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StC, Font, Colors } from "@styles";
import { Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { icon_uri } from "@constants/BASE_URL";
import moment from 'moment';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CardToday = ({
    item,
    onPress,
    selected
}) => {

    let icon = ''
    let name = ''

    if(item?.weather){
        icon = item?.weather[0]?.icon + '@2x.png'
        name = item?.weather[0]?.main
    }

    return (
        <TouchableOpacity style={[styles.card, selected && {backgroundColor: Colors.PRIMARY}]} onPress={onPress}>
            <View style={StC.flexR}>
                <Text style={styles.txtTime}>{moment(item.dt_txt).format('HH:mm')}</Text>
                <View style={StC.flexR}>
                    <Text style={styles.txtTemperature}>{parseInt(item?.main?.temp)}</Text>
                    <Icon as={MaterialCommunityIcons} name={'temperature-celsius'} color={Colors.SECONDARY} size={RFValue(2)}/>
                </View>
            </View>
            <Image source={{uri: icon_uri + icon}} style={styles.iconWeather}/>
        </TouchableOpacity>
    )
}

export default CardToday;

const styles = ({
    card:{
        ... StC.mb15,
        ... StC.p8,
        backgroundColor: '#1E2048',
        marginHorizontal: RFValue(10),
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
        ... Font.F10,
        ... Font.GRAY,
        ... Font.Regular,
        marginRight: RFValue(1),
    },
    iconWeather:{
        ... StC.mt5,
        width: RFValue(70),
        height: RFValue(40),
    }
})