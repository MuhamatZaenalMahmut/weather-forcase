import React, { useEffect, useState } from 'react';
import { View, ScrollView, PermissionsAndroid } from 'react-native';
import { BaseContainer, AppBar, CardWeather, CardForecast } from '@components';
import { connect } from "react-redux";
import { StC } from "@styles";
import { Coordinate } from "@actions";
import store from "@stores/store";
import weatherUtils from '@utils/WeatherUtils';
import Geolocation from '@react-native-community/geolocation';

function Dashboard({ weather }) {
    
    const coordinate            = weather.coordinate
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadLocation()
        getWeather()
        getForecast()
    }, [])

    // LOCATION
    const loadLocation = async () => {
        async function requestLocationPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                        'title': 'Location Access Required',
                        'message': 'This App needs to Access your location'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    callLocation();
                } else {
                    alert("Activate GPS");
                }
            } catch (err) {

            }
        }

        requestLocationPermission();
    }

    const callLocation = async () => {
        Geolocation.getCurrentPosition(
            (position) => {
               
                let coordinate = {
                    lon : JSON.stringify(position.coords.longitude),
                    lat: JSON.stringify(position.coords.latitude)
                }

                storeCoordinate(coordinate)

            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000000, maximumAge: 1000 }
        );
        watchID = Geolocation.watchPosition((position) => {
            let coordinate = {
                lon : JSON.stringify(position.coords.longitude),
                lat: JSON.stringify(position.coords.latitude)
            }

            storeCoordinate(coordinate)
            
        });
    }

    const storeCoordinate =  async (coordinate) => {
        return store.dispatch(Coordinate(coordinate))
    }

    const getWeather = async () => {

        let temp = {
            type: 'weather',
            lat: coordinate.lat,
            lon: coordinate.lon
        }

        setLoading(true)
        await weatherUtils.forecast(temp)
        setLoading(false)
    }

    const getForecast = async () => {

        let temp = {
            type: 'forecast',
            lat: coordinate.lat,
            lon: coordinate.lon
        }

        setLoading(true)
        await weatherUtils.forecast(temp)
        setLoading(false)
    }

    return (
        <BaseContainer loading={loading}>
            <AppBar title={'Weather Forcase'}/>
            <ScrollView>
                <CardWeather/>
                <CardForecast/>
                <View style={StC.mb80}/>
            </ScrollView>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { weather } = state;
    return { weather }
}
  
export default connect(mapStateToProps)(Dashboard);