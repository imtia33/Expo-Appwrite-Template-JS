

import { memo, useCallback } from "react"
import { StatusBar } from "expo-status-bar"
import { Image, Text, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from "../Tabs/Home"
import TestScreen from "../Tabs/TestScreen"
import { useGlobalContext } from "../../context/GlobalContext"

const Tab = createBottomTabNavigator()

const TabIcon = memo(({ icon, color, name, focused }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 1, paddingBottom: 3 }}>
      <MaterialCommunityIcons 
        name={icon}
        size={24}
        color={color}
      />
      {!focused && <Text style={{ fontFamily: 'psemibold', color: 'white', fontSize: 12 }}>{name}</Text>}
    </View>
  )
})

const TabNavigator = () => {
  const { loading, UserisLogged } = useGlobalContext()

  const getTabIcon = useCallback(({ route, focused, color }) => {
    let iconName

    switch (route.name) {
      case "Home":
        iconName = "home"
        break
      
      default:
        iconName = "home"
    }

    return <TabIcon icon={iconName} color={color} name={route.name} focused={focused} />
  }, [])


  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        lazy={true}
        lazyPreloadDistance={0}
        removeClippedSubviews={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => getTabIcon({ route, focused, color }),
          tabBarActiveTintColor: "#ad1c40",
          tabBarInactiveTintColor: "#FFF",
          tabBarStyle: {
            
            elevation: 0,
            backgroundColor: "#171717",
            height: 70,
            paddingTop: 8,
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarPressColor: "rgba(173, 28, 64, 0.1)",
          
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TestScreen" component={TestScreen} />
        
      </Tab.Navigator>
      
      <StatusBar style="dark" />
    </>
  )
}

export default TabNavigator
