import Icon from "../../components/Icon/Icon";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ImageListContainer from "../../components/ImageList/ImageListContainer";
import Header from "../../components/Header/Header";
import {Text, StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();

const MainScreen = () => (
    <Tab.Navigator
        screenOptions={({route}) => ({

            headerShown: false,
            tabBarLabel: ((focused) => {
                let color = focused.focused ? "#A10D99" : "#94949D"
                if (route.name === "Gallery") {
                    return <Text style={{color: color}}>Галерея</Text>
                } else if (route.name === "Favorite") {
                    return <Text style={{color: color}}>Избранное</Text>
                }
            }),
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === "Gallery") {
                    iconName = focused ? "GalleryActive" : "GalleryInactive"
                } else if (route.name === "Favorite") {
                    iconName = focused ? "FavoriteActive" : "FavoriteInactive"
                }

                return <Icon name={iconName}/>
            },
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
