import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopColor: Colors.border
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="screen2"
        options={{
          title: "Screen 2",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="build" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="screen3"
        options={{
          title: "Screen 3",
          tabBarIcon: ({ color, size }) => <Ionicons name="sparkles" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="screen4"
        options={{
          title: "Screen 4",
          tabBarIcon: ({ color, size }) => <Ionicons name="rocket" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
