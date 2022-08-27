import React from "react";
import { Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard, Profile, Search } from "@scenes";
import { Icons } from "@assets";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="CompanyDashboard"
            backBehavior="initialRoute"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    paddingBottom: RFValue(5),
                    paddingTop: RFValue(10),
                    minHeight: RFValue(50),
                    borderTopWidth: 0,
                    alignItems: "center",
                    display: route.name === "AddTransaction" ? "none" : "flex",
                    backgroundColor: '#3E415C',
                    marginHorizontal: RFValue(10),
                    borderRadius: RFValue(10),
                    marginBottom: RFValue(10),
                    position: 'absolute'
                },
                tabBarLabel: ({ color }) => {
                    
                    return <Text style={{  fontSize: 10, color }}></Text>;
                },
                tabBarIcon: ({ focused }) => {
                    let iconName, style;

                    switch (route.name) {
                    case "Dashboard":
                        iconName = focused ? Icons.homeTabActive : Icons.homeTab;
                        break;
                    case "Search":
                        iconName = focused ? Icons.searchTabActive : Icons.searchTab;
                        break;
                    case "Profile":
                        iconName = focused ? Icons.accountTabActive : Icons.accountTab;
                        break;
                    }

                    return <Image style={{width: wp(8), height: hp(6), resizeMode: 'contain'}} source={iconName} />;
            },
        })}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;