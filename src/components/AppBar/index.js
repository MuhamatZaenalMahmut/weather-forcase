import React from "react";
import { View, Text } from 'react-native';
import { Colors, StC, Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';

const AppBar = ({
    title
}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </View>
    )
}

export default AppBar;

const styles = ({
    header:{
        ... StC.flexR,
        ... StC.centerPage,
        backgroundColor: Colors.PRIMARY,
        height: RFValue(50),
        borderBottomWidth: 1,
        borderBottomColor: Colors.PRIMARY,
    },
    title:{
        ... Font.F14,
        ... Font.Medium,
        ... Font.WHITE,
    },
})