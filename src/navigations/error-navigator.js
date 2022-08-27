import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Error } from "@scenes";
import { HorizontalSlide } from "./CustomTransaction";

const Stack = createStackNavigator();

const ErrorNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Error"
                component={Error}
                options={{
                    animationTypeForReplace: "push",
                    headerShown: false,
                    cardStyleInterpolator: HorizontalSlide,
                }}
            />
        </Stack.Navigator>
    );
};

export default ErrorNavigator;
