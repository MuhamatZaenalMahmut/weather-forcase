import React from 'react';
import { Image, Animated, View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from "@styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Images } from "@assets";
import { BaseContainer } from '@components';
import MMKVStorage from 'react-native-mmkv-storage';

class AuthCheck extends React.Component {
    
    render() {
        return(
            <BaseContainer>
                
            </BaseContainer>
        )
    }
}

export default connect(null, null)(AuthCheck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY 
    },
});