import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import RootNavigator from "@navigations";
import store from "@stores/store";
console.disableYellowBox = true;

const App = () => {
return (
    <NativeBaseProvider>
        <StoreProvider store={store}>
            <RootNavigator/>
        </StoreProvider>
    </NativeBaseProvider>
);
};

export default App;