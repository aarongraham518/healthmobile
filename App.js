import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {HomeScreen} from "./screens/HomeScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";

import { FavoriteDrScreen } from "./screens/FavoriteDrScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { AppointmentScreen } from "./screens/AppointmentScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { MapScreen } from "./screens/MapScreen";
import { MedDetailScreen } from "./screens/MedDetailScreen";
import { MedSearchScreen } from "./screens/MedSearchScreen";
import { DocScreen } from "./screens/DocScreen";

import { AppProvider } from './store/AppContext';
import DoctorProfileScreen from "./screens/DrProfileScreen";
import BookingComponent from "./components/ui/BookingComponent";

//add screenOptions to Tab.Navigator
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Appointments"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="MedSearch"
        component={MedSearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="beaker" color={color} size={size} />
          ),
        }}
      />

      {/* <BottomTab.Screen
        name="Meds"
        component={MedDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="beaker" color={color} size={size} />
          ),
        }}
      /> */}

      {/* <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Notifications" component={MyTabs} />

        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="FavoriteDrScreen" component={FavoriteDrScreen} />

        <Stack.Screen name="MedDetailsScreen" component={MedDetailScreen} />

        <Stack.Screen name="MapScreen" component={MapScreen} />

        <Stack.Screen name="DocScreen" component={DocScreen} />

        <Stack.Screen name="DocProfile" component={DoctorProfileScreen} />

        <Stack.Screen name="BookAppt" component={BookingComponent} />

      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}
