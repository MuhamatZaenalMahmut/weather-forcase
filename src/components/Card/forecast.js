import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Colors, StC, Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import { CardToday, CardHourly, CardDaily } from "@components";
import { AnimationLayout, groupedForecast } from "@constants";
import { FlatGrid } from 'react-native-super-grid';
import { Detail } from '@actions';
import store from "@stores/store";
import moment from 'moment';

const CardForecast = ({
    weather
}) => {
    const weathers                          = weather.weather
    const forecast                          = weather.forecast
    const [filter, setFilter]               = useState(0)
    const [filterToday , setFilterToday]    = useState(0)
    const [filterHourly , setFilterHourly]  = useState(0)
    const [filterDaily , setFilterDaily]    = useState(-1)

    let icon = ''
    let name = ''

    if(weathers?.weather){
        icon = weathers?.weather[0]?.icon + '@2x.png'
        name = weathers?.weather[0]?.main
    }

    let arrFilter = [
        {
            label: 'Today',
        },
        {
            label: 'Hourly',
        },
        {
            label: 'Daily',
        }
    ]

    let arrData = forecast.list ? forecast.list : []
    let arr     = JSON.stringify(arrData) // CLONE ARR

    const groupeForecast = groupedForecast(JSON.parse(arr))

    const filteredData =  async (date, index) => {
        setFilterDaily(index == filterDaily ? -1 : index);

        let arr = arrData.filter(x => moment(x.dt_txt).format('YYYY-MM-DD') == moment(date.dt_txt).format('YYYY-MM-DD'))
        store.dispatch(Detail(arr))
        AnimationLayout();
    }

    return (
        <View style={styles.content}>
            <Text style={styles.txtTitle}>Weather Forecast</Text>
            <View style={styles.card}>
                <View style={{alignItems: 'center'}}>
                    <FlatList
                        data={arrFilter}
                        numColumns={3}
                        renderItem={(({ item, index }) => (
                            <TouchableOpacity style={[styles.cardItem, index == filter && {backgroundColor: '#252A59'}]} key={index} onPress={()=> {setFilter(index); AnimationLayout()}}>
                                <Text style={styles.txtItem}>{item.label}</Text>
                            </TouchableOpacity>   
                        ))}
                    />
                </View>
                {filter == 0 &&
                    <FlatGrid
                        itemDimension={RFValue(100)}
                        data={arrData.filter(x => moment(x.dt_txt).format('YYYY-MMMM-DD') == moment().format('YYYY-MMMM-DD'))}
                        spacing={0}
                        renderItem={(({ item, index }) => (
                            <CardToday item={item} selected={index == filterToday} onPress={()=> {setFilterToday(index); AnimationLayout()}}/>                        
                        ))}
                    />
                }
                {filter == 1 &&
                    <FlatList
                        data={arrData.filter(x => moment(x.dt_txt).format('YYYY-MMMM-DD') == moment().format('YYYY-MMMM-DD'))}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={(({ item, index }) => (
                            <CardHourly item={item} selected={index == filterHourly} onPress={()=> {setFilterHourly(index); AnimationLayout()}}/>                        
                        ))}
                    />
                }
                {filter == 2 &&
                    <FlatList
                        data={groupeForecast}
                        renderItem={(({ item, index }) => (
                            <CardDaily item={item} detail={weather.detail} selected={index == filterDaily} onPress={()=> filteredData(item, index)}/>                        
                        ))}
                    />
                }
            </View>
        </View>
    )
}

const mapStateToProps = function (state) {
    const { weather } = state;
    return { weather }
}
  
export default connect(mapStateToProps)(CardForecast);

const styles = ({
    content:{
        ... StC.m15,
        ... StC.mt30,
    },
    txtTitle:{
        ... Font.GRAY,
        ... Font.F12,
        ... Font.Regular
    },
    card:{
        ... StC.mt10,
        ... StC.p15,
        backgroundColor: Colors.PRIMARY_SOFT,
        borderRadius: RFValue(10),
    },
    cardItem:{
        ... StC.ph10,
        ... StC.pv5,
        ... StC.mH10,
        ... StC.mb20,
        borderRadius: RFValue(10)
    },
    txtItem:{
        ... Font.GRAY,
        ... Font.F11,
        ... Font.Regular
    },
    cardForecast:{
        width: RFValue(100),
        height: RFValue(50)
    }
})