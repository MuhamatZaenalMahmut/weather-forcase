import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from "@styles";

const StC = StyleSheet.create({
    w04: {width: '4%'},
    w05: {width: '5%'},
    w06: {width: '6%'},
    w07: {width: '7%'},
    w10: {width: '10%'},
    w15: {width: '15%'},
    w20: {width: '20%'},
    w25: {width: '25%'},
    w30: {width: '30%'},
    w35: {width: '35%'},
    w40: {width: '40%'},
    w45: {width: '45%'},
    w48: {width: '48%'},
    w50: {width: '50%'},
    w55: {width: '55%'},
    w60: {width: '60%'},
    w65: {width: '65%'},
    w70: {width: '70%'},
    w75: {width: '75%'},
    w80: {width: '80%'},
    w85: {width: '85%'},
    w90: {width: '90%'},
    w95: {width: '95%'},
    w100: {width: '100%'},
    h03: {height: '3%'},
    h04: {height: '4%'},
    h05: {height: '5%'},
    h06: {height: '6%'},
    h07: {height: '7%'},
    h08: {height: '8%'},
    h10: {height: '10%'},
    h15: {height: '15%'},
    h20: {height: '20%'},
    h25: {height: '25%'},
    h30: {height: '30%'},
    h35: {height: '35%'},
    h40: {height: '40%'},
    h43: {height: '43%'},
    h45: {height: '45%'},
    h50: {height: '50%'},
    h55: {height: '55%'},
    h60: {height: '60%'},
    h65: {height: '65%'},
    h70: {height: '70%'},
    h75: {height: '75%'},
    h80: {height: '80%'},
    h85: {height: '85%'},
    h90: {height: '90%'},
    h100: {height: '100%'},

    mH05: {
        marginHorizontal: RFValue(5)
    },
    mH10: {
        marginHorizontal: RFValue(10)
    },
    mh15: {
        marginHorizontal: RFValue(15)
    },
    mH25: {
        marginHorizontal: RFValue(25)
    },
    mH30: {
        marginHorizontal: RFValue(30)
    },

    mV10: {
        marginVertical: RFValue(10)
    },
    mV15: {
        marginVertical: RFValue(15)
    },
    mV20: {
        marginVertical: RFValue(20)
    },

    wh15: {width: RFValue(15), height: RFValue(15)},
    wh20: {width: RFValue(20), height: RFValue(20)},
    wh25: {width: RFValue(25), height: RFValue(25)},
    wh30: {width: RFValue(30), height: RFValue(30)},
    wh35: {width: RFValue(35), height: RFValue(35)},
    wh40: {width: RFValue(40), height: RFValue(40)},
    wh50: {width: RFValue(50), height: RFValue(50)},
    wh60: {width: RFValue(60), height: RFValue(60)},
    wh90: {width: RFValue(90), height: RFValue(90)},
    wh150: {width: RFValue(150), height: RFValue(150)},

    bgPrimary:{
        backgroundColor: Colors.PRIMARY
    },

    bgPrimarySoft:{
        backgroundColor: Colors.PRIMARY_SOFT
    },

    bgWhite:{
        backgroundColor: Colors.WHITE
    },

    bgBackground:{
        backgroundColor:Colors.BACKGROUND
    },

    m15: {
        margin: RFValue(15),
    },

    mt3:{
        marginTop: RFValue(3)
    },
    mt5:{
        marginTop: RFValue(5)
    },
    mt7:{
        marginTop: RFValue(7)
    },
    mt10:{
        marginTop: RFValue(10)
    },
    mt15:{
        marginTop: RFValue(15)
    },
    mt20:{
        marginTop: RFValue(20)
    },
    mt25:{
        marginTop: RFValue(25)
    },
    mt30:{
        marginTop: RFValue(30)
    },
    mt40:{
        marginTop: RFValue(40)
    },
    mt50:{
        marginTop: RFValue(50)
    },
    mb2:{
        marginBottom: RFValue(2)
    },
    mb3:{
        marginBottom: RFValue(3)
    },
    mb5:{
        marginBottom: RFValue(5)
    },
    mb8:{
        marginBottom: RFValue(8)
    },
    mb10:{
        marginBottom: RFValue(10)
    },
    mb15:{
        marginBottom: RFValue(15)
    },
    mb20:{
        marginBottom: RFValue(20)
    },
    mb25:{
        marginBottom: RFValue(25)
    },
    mb30:{
        marginBottom: RFValue(30)
    },
    mb40:{
        marginBottom: RFValue(40)
    },
    mb50:{
        marginBottom: RFValue(50)
    },
    mb80:{
        marginBottom: RFValue(80)
    },

    wh100: {width: '100%', height: '100%'},

    flexR: {flexDirection: 'row'},
    flexC: {flex: 1, flexDirection: 'column'},

    centerPage: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    p5:{
        padding: RFValue(5),
    },
    p8:{
        padding: RFValue(8),
    },
    p10:{
        padding: RFValue(10),
    },
    p15:{
        padding: RFValue(15),
    },
    ph5:{
        paddingHorizontal: RFValue(5),
    },
    ph10:{
        paddingHorizontal: RFValue(10),
    },
    ph15:{
        paddingHorizontal: RFValue(15),
    },
    ph20:{
        paddingHorizontal: RFValue(20),
    },
    pv5:{
        paddingVertical: RFValue(5),
    },
    pv6:{
        paddingVertical: RFValue(6),
    },
    pv10:{
        paddingVertical: RFValue(10),
    },
    pv15:{
        paddingVertical: RFValue(15),
    },
    pv20:{
        paddingVertical: RFValue(20),
    },
    pv10_ph10: {
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(10),
    },
    pv15_ph10: {
        paddingVertical: RFValue(15),
        paddingHorizontal: RFValue(10),
    },
});

export default StC;
