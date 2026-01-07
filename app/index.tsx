import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GamesList from "@/components/GamesList";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GamesList />
      </View>
    </SafeAreaProvider>
  );
}
