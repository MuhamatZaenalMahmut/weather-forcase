import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { BaseContainer } from '@components';
import { StC } from "@styles";
import { Icons } from "@assets";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

function Profile() {
    return (
        <BaseContainer>
            <View style={styles.content}>
                <Image source={Icons.weather} style={{ width: wp("60%"), height: hp("40%"), resizeMode:'contain' }}/>
            </View> 
        </BaseContainer>
    )
}

export default Profile;

const styles = StyleSheet.create({
    content:{
        ... StC.centerPage,
        width: '100%',
        height: '100%',
    }
})