import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from 'react-native';
import { Colors, StC, Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import { Icon } from "native-base";
import { icon_uri } from "@constants/BASE_URL";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from 'moment';

const CardWeather = ({
    weather
}) => {
    const weathers          = weather.weather
    const [date, setDate]   = useState()

    useEffect(() => {
        setInterval(() => {
            setDate(moment().format('ddd, D MMM YYYY HH:mm'))
        }, 1000)
    }, [])

    let icon = ''
    let name = ''

    if(weathers?.weather){
        icon = weathers?.weather[0]?.icon + '@2x.png'
        name = weathers?.weather[0]?.main
    }

    let arr = [
        {
            label: 'Cloudiness',
            value: weathers?.clouds?.all,
            type: '%'
        },
        {
            label: 'Humidity',
            value: weathers?.main?.humidity,
            type: '%'
        },
        {
            label: 'Wind',
            value: weathers?.wind?.speed,
            type: 'm/sec'
        }
    ]

    return (
        <View>
            <View style={styles.cardHeader}>
                <View style={StC.flexR}>
                    <Text style={styles.txtToday}>Today</Text>
                    <Text style={styles.txtTime}>{date}</Text>
                </View>
                <View style={[StC.flexR, StC.mt30]}>
                    <View style={[StC.flexR, {flex: 1}]}>
                        <Text style={styles.txtTemperature}>{parseInt(weathers?.main?.temp)}</Text>
                        <Icon as={MaterialCommunityIcons} name={'temperature-celsius'} color={Colors.SECONDARY} size={RFValue(7)} style={StC.mt10}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image source={{uri: icon_uri + icon}} style={styles.iconWeather}/>
                        <Text style={styles.txtTime}>{name}</Text>
                    </View>
                    
                </View>
                <View style={[StC.flexR, {alignItems: 'center'}]}>
                    <Icon as={Ionicons} name={'location-outline'} color={Colors.SECONDARY} size={RFValue(3)}/>
                    <Text style={styles.txtAddress}>{weathers.name}</Text>
                </View>
            </View>
            <FlatList
                data={arr}
                numColumns={3}
                renderItem={(({ item, index }) => (
                    <View style={[styles.cardItem, index == 1 && styles.line]} key={index}>
                        <View style={[StC.flexR, StC.centerPage]}>
                            <Text style={styles.txtValue}>{item.value}</Text>
                            <Text style={styles.txtType}>{item.type}</Text>
                        </View>
                        <Text style={styles.txtLabel}>{item.label}</Text>
                    </View>   
                ))}
            />
        </View>
    )
}

const mapStateToProps = function (state) {
    const { weather } = state;
    return { weather }
}
  
export default connect(mapStateToProps)(CardWeather);

const styles = ({
    cardHeader:{
        ... StC.m15,
        ... StC.p15,
        ... StC.mb30,
        borderRadius: RFValue(10),
        backgroundColor: Colors.PRIMARY_SOFT,
    },
    txtToday:{
        ... Font.F15,
        ... Font.WHITE,
        flex: 1,
    },
    txtTime:{
        ... Font.F11,
        ... Font.GRAY
    },
    txtTemperature:{
        ... Font.F40,
        ... Font.WHITE,
    },
    iconWeather:{
        width: RFValue(100),
        height: RFValue(60),
    },
    txtAddress:{
        ... Font.F12,
        ... Font.GRAY,
        marginLeft: RFValue(5),
    },
    cardItem:{
        alignItems:'center',
        flex:1
    },
    txtValue:{
        ... Font.F18,
        ... Font.WHITE,
    },
    txtType:{
        ... Font.F10,
        ... Font.WHITE,
        marginLeft: RFValue(3),
        marginTop: RFValue(-10),
    },
    txtLabel:{
        ... Font.F9,
        ... Font.WHITE,
        ... StC.mt5
    },
    line:{
        borderLeftWidth: RFValue(1),
        borderRightWidth: RFValue(1),
        borderColor: Colors.GRAY
    }
})