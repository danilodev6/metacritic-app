import { Stack } from "expo-router";
import "../global.css";
import { InfoIcon } from "@/components/Icons";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <Text className="font-bold text-2xl p-2">Metacritic</Text>,
        headerRight: () => <InfoIcon />,
      }}
    />
  );
}
