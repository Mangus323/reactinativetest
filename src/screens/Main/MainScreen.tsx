import Icon from "../../components/Icon/Icon";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ImageListContainer from "../../components/ImageList/ImageListContainer";
import Header from "../../components/Header/Header";

const Tab = createBottomTabNavigator();

const MainScreen = () => (
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
        <Tab.Screen name="Gallery" component={Gallery}/>
        <Tab.Screen name="Favorite" component={Favorite}/>
    </Tab.Navigator>
)

function Gallery({navigation}) {
    return (
        <>
            <Header title={"Все изображения"}/>
            <ImageListContainer navigation={navigation} route={"gallery"}/>
        </>
    );
}

function Favorite({navigation}) {
    return (
        <>
            <Header title={"Избранное"}/>
            <ImageListContainer navigation={navigation} route={"favorite"}/>
        </>
    );
}

export default MainScreen
