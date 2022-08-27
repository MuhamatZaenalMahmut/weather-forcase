import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoarding } from "@scenes";
import { HorizontalSlide } from "./CustomTransaction";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="OnBoarding"
                component={OnBoarding}
                options={{
                    animationTypeForReplace: "push",
                    headerShown: false,
                    cardStyleInterpolator: HorizontalSlide,
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
