import * as React from 'react';
//import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
} from 'react-native';
import Header from "./components/Header/Header";
import ImageList from "./components/ImageList/ImageList";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "./components/Icon/Icon";
import {Provider} from "react-redux";
import store from "./store/store";

function HomeScreen() {
    return (
        <ImageList/>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <Header/>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                            } else if (route.name === 'Settings') {
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                            }

                            // You can return any component that you like here!
                            return <Icon/>
                        }
                    })}
                >
                    <Tab.Screen name="Галерея" component={HomeScreen}/>
                    <Tab.Screen name="Избранное" component={SettingsScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
