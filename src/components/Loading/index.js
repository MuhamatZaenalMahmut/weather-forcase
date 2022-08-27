import React from "react";
import { Modal, ActivityIndicator, View, StyleSheet } from 'react-native';
import { Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';

const Loading = ({
    loading,
}) => {
        
    return (
        loading ?
        <Modal animationType="fade" transparent={true} visible={true}>
            <Animatable.View animation={"pulse"} iterationDelay={0} style={styles.modalContainer}>
                <View style={styles.loadingBox}>
                    <ActivityIndicator size="large" color={Colors.PRIMARY}/>
                </View>
            </Animatable.View>
        </Modal> : null
    )
}

export default Loading;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        alignItems: "center",
        justifyContent: "center"
    },
    loadingBox: {
        width: RFValue(55),
        height: RFValue(55),
        backgroundColor: Colors.WHITE,
        borderRadius: RFValue(10),
        alignItems: "center",
        justifyContent: "center"
    },
});