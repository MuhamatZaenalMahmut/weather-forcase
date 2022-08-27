import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Font, StC, Shadow } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';

const ButtonFlex = ({
    disabled,
    onPress,
    style,
    small,
    title,
    outline,
    form,
    hide,
    remove
}) => {
    return (
        !hide &&
            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={disabled ? null : onPress} 
                style={[styles.btn, 
                    style,
                    small ? styles.small : styles.normal,
                    // !outline && {backgroundColor: Colors.PRIMARY},
                    // disabled && {backgroundColor: Colors.GRAY, borderColor: Colors.GRAY},
                    // remove && {backgroundColor: Colors.BACKGROUND, borderColor: Colors.DANGER},
                    // form && styles.form
                ]}
            >
                <Text style={[
                    styles.label, 
                    small ? styles.fontSmall : styles.fontMedium,
                    outline ? Font.PRIMARY : Font.BLACK,
                    remove && Font.DANGER
                ]}>{title}</Text>
            </TouchableOpacity>
        
    )
}

export default ButtonFlex

const styles = StyleSheet.create({
    btn:{
        ... Shadow.Normal,
        ... StC.centerPage,
        ... StC.flexR,
        paddingHorizontal:RFValue(15),
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        borderColor: Colors.PRIMARY,
        backgroundColor: Colors.SECONDARY
    },
    small:{
        height: RFValue(30),
    },
    normal:{
        height: RFValue(48),
    },
    label:{
        ... Font.BLACK,
        textAlign:'center'
    },
    fontSmall:{
        ... Font.Regular,
        ... Font.F12
    },
    fontMedium:{
        ... Font.Medium,
        ... Font.F13
    },
    form:{
        marginHorizontal: RFValue(15),
        marginBottom: RFValue(15)
    }
});
