import React from 'react';
import { Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Colors, StC, Font } from "@styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icons } from "@assets";
import { BaseContainer, ButtonFlex } from '@components';
import { SignIn } from '@actions';
import store from "@stores/store";

const Error = ({ navigation }) => {

    const handlePress = (uri) => {
        navigation.navigate(uri);
        store.dispatch(SignIn())
    };

    return (      
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: Colors.PRIMARY}}>
                <View style={styles.imgCont}>
                    <Image source={Icons.weather} style={{ width: wp("50%"), height: hp("30%"), resizeMode:'contain' }}/>
                </View>
                <View style={styles.btnCont}>
                    <Text style={styles.title}>Error</Text>
                    <ButtonFlex
                        style={StC.mT30}
                        title={'Try Again'}
                        onPress={async () => await handlePress('OnBoarding')}
                    />
                </View>
            </ScrollView>
        </BaseContainer>  
    )
}

export default Error;

const styles = StyleSheet.create({
    btnCont: {
        paddingHorizontal: wp(10),
        marginTop: wp(20),
    },
    imgCont: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: wp(30),
    },
    title:{
        ... Font.WHITE,
        ... Font.F30,
        textAlign: 'center',
    },
    desc:{
        ... Font.GRAY,
        ... Font.F11,
        ... StC.mt10,
        textAlign: 'center',
    }
})
