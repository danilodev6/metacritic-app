import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIconTab, InfoIconTab } from "@/components/Icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIconTab color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIconTab color={color} />,
        }}
      />
    </Tabs>
  );
}
